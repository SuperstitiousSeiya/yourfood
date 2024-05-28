//@ts-ignore
import FoodSearchBar from "@/components/FoodUI/FoodSearchBar";
import Meals from "@/components/FoodUI/Meals";
// import Skeleton from "@/components/Skeleton/CardSkeleton";
import { useFood } from "@/lib/hooks/useFood";
import Await from "@/lib/utils/componentUtils";
import React, { Suspense } from "react";
import { v4 as uuid } from "uuid";

interface Props {
  searchParams: {
    term: string | undefined;
  };
}

const SearchPage = async ({ searchParams: { term } }: Props) => {
  const { searchMealByName } = useFood();
  const query = term ? term : "";
  const promise = await searchMealByName(query);

  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32" key={uuid()}>
      <div className="container space-y-10 xl:space-y-16">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Foods under &quot;{term}&quot; results
            </h1>
            <FoodSearchBar value={term!}></FoodSearchBar>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Suspense fallback={"Loading..."}>
            <Await promise={promise}>
              {/* 
// @ts-ignore */}
              {({ meals }) => <Meals meals={meals} />}
            </Await>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
