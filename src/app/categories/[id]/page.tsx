import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useFood } from "@/lib/hooks/useFood";
import Meals from "@/components/FoodUI/Meals";

interface Props {
  params: { id: string };
}

export default async function CategoriesPages({ params }: Props) {
  const { filterByCategory, listAllMealCategories } = useFood();
  const { meals } = await filterByCategory(params.id);
  const { categories } = await listAllMealCategories();

  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container space-y-10 xl:space-y-16">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Foods under &quot;{params.id}&quot; category
            </h1>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Link href={`/categories/${category.strCategory}`} className="bg-primary text-white px-3 py-1 hover:bg-primary/90 transition-colors rounded-full" key={category.idCategory}>{category.strCategory}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Meals meals={meals} />
         
        </div>
      </div>
    </section>
  );
}
