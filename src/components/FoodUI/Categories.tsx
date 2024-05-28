import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Category } from "@/lib/typings/types";
import { useFood } from "@/lib/hooks/useFood";

export interface CategoriesComponentProps {
  categories: Category[];
}

const Categories = async () => {
    const { listAllMealCategories } = useFood();
    const { categories } = await listAllMealCategories();
  
  return (
    <>
      {categories.map((category) => (
        <div
          key={category.idCategory}
          className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
        >
          <Link className="absolute inset-0 z-10" href={`/categories/${category.strCategory}`}>
            <span className="sr-only">View {category.strCategory}</span>
          </Link>
          <Image
            alt={category.strCategory}
            className="object-cover w-full h-60"
            height={300}
            src={category.strCategoryThumb || "/placeholder.svg"}
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-semibold text-lg md:text-xl">
              {category.strCategory}
            </h3>
            {/* <p className="text-sm text-gray-500 dark:text-gray-400">
                  {category.strCategoryDescription}
                </p> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Categories;
