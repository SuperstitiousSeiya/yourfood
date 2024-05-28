import Image from 'next/image';

import { Tabs, TabsContent, TabsList, TabsTrigger} from '../ui/tabs';
import { Meal } from './Meals';

interface FoodInfoProps {
  meal?: Meal;
}

export default function FoodInfo({ meal }: FoodInfoProps) {
  if (!meal) {
    return <div>No meal data available</div>;
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}` as keyof Meal];
    const measure = meal[`strMeasure${i}` as keyof Meal];
    if (ingredient && measure) {
      ingredients.push(`${measure.trim()} ${ingredient.trim()}`);
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto py-12 md:py-16 px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <Image
            alt={meal.strMeal}
            className="rounded-lg w-full h-auto object-cover"
            height={400}
            src={meal.strMealThumb || '/placeholder.svg'}
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width={600}
          />
        </div>
        <div className="order-1 md:order-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {meal.strMeal}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            {meal.strInstructions}
          </p>
        </div>
      </div>
      <div className="mt-12 md:mt-16">
        <Tabs defaultValue="ingredients">
          <TabsList className="flex border-b border-gray-200 dark:border-gray-800">

            <TabsTrigger value="ingredients">Ingredients</TabsTrigger>

          </TabsList>

          <TabsContent value="ingredients">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-lg font-bold mb-4">Ingredients</h2>
              <ul className="space-y-2">
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  );
}
