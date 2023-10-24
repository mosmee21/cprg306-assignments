// page.js
"use client";

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedIngredient, setSelectedIngredient] = useState(''); // State for the chosen ingredient

    const handleAddItem = (newItem) => {
      setItems([...items, newItem]);
    };

    return (
      <div className="min-h-screen bg-gradient-to-r from-lime-500 to-cyan-500 py-2 ">
        <h1 className="text-3xl font-bold ml-10 mb-4 text-black">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
        
        <div className="p-4 mt-5 bg-white rounded-lg shadow-md">
          <label className="text-xl font-bold mb-4">
            Select ingredient for meal ideas: 
            <select 
              className="ml-4 p-2 bg-gray-200 rounded" 
              onChange={e => setSelectedIngredient(e.target.value)}
            >
              <option value="">- Select -</option>
              {items.map(item => (
                <option key={item.id} value={item.name.split(',')[0]}>{item.name}</option> 
                // Taking only the primary name (before the comma if any) as ingredient
              ))}
            </select>
          </label>
        </div>

        {selectedIngredient && <MealIdeas ingredient={selectedIngredient} />}
      </div>
    );
}
export default Page;
