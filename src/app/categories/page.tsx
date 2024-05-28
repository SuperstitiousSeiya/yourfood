import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Bevarages, Dessert, MainCourse } from "@/assets";
import { useFood } from "@/lib/hooks/useFood";
import Categories from "@/components/FoodUI/Categories";

interface Props {
  searchParams: {};
}

const CategoriesPage = async () => {

  return (
    <>
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                All Foods Categories
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Explore the foods dish with their specific categories
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Categories></Categories>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesPage;
