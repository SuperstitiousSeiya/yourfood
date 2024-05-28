import FoodInfo from "@/components/FoodUI/FoodInfo";
import { Meal } from "@/components/FoodUI/Meals";
import { useFood } from "@/lib/hooks/useFood";
import React from "react";

export default async function FoodInfoPage({params}: {params: {id: string}}) {

const {lookupFullMealDetailsById} = useFood()

const {meals} = await lookupFullMealDetailsById(params.id)
const meal = meals?.[0] as Meal | undefined;
  return (
    <div>
      <FoodInfo meal={meal} />
    </div>
  );
}
