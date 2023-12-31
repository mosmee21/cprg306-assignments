"use client";

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas'; 



function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(''); 

  const handleAddItem = (newitem) => {
    setItems([...items, newitem]);
  };

  const handleItemSelect = (item) => {
    const cleanName = item.name.split(',')[0].trim().replace(/[^a-zA-Z ]/g, '');
    setSelectedItemName(cleanName);
  };

  return (
    <div className=" bg-gradient-to-r from-lime-500 to-cyan-500 min-h-screen" >
      <h1 className="text-3xl font-bold ml-10 mb-4 text-black ">Shopping List</h1>
      <div className="flex space-x-10">
        <div className="w-1/3 ">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        
        
        <div className="flex-grow ">
        
          <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
    </div>

  );
}

export default Page;
