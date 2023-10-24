// meal-ideas.js
"use client";

import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals;
};

function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMealIdeas = async () => {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals || []); // In case of no meals found, set to an empty array
    };

    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-4 mt-5 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.map(meal => (
          <li key={meal.idMeal} className="mb-2 text-gray-800">
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealIdeas;
