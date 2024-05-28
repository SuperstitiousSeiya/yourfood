// import React from 'react';


// interface MealComponentProps {
//   meals: Meal[];
// }

// const MealComponent: React.FC<MealComponentProps> = ({ meals }) => {
//   return (
//     <div>
//       <h1>Meal Data</h1>
//       {meals.map(meal => (
//         <div key={meal.idMeal}>
//           <h2>{meal.strMeal}</h2>
//           <img src={meal.strMealThumb} alt={meal.strMeal} />
//           <p>{meal.strInstructions}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default async function Page() {
//   const mealsResponse = await searchMealByName('Ayam Percik');
//   return <MealComponent meals={mealsResponse.meals} />;
// }
