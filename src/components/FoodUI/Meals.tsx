import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useFood } from "@/lib/hooks/useFood";

export interface Meal {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
}

export declare interface Document {
  [key: string]: any;
}

interface Props {
  meals: Document[] | undefined;
}

export default async function Meals({ meals }: Props) {

  if(!meals) return (<>No Results</>)


  return (
    <>
      {" "}
      {meals?.map((meal) => (
        <Link
          key={meal.idMeal}
          className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
          href={`/info/${meal.idMeal}`}
        >
          <Image
            alt="Appetizers"
            className="object-cover w-full h-60"
            height="300"
            src={meal.strMealThumb}
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400"
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-semibold text-lg md:text-xl">{meal.strMeal}</h3>
          </div>
        </Link>
      ))}
    </>
  );
}
