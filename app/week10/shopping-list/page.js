"use client";

import React, { useState, useEffect } from 'react';
import { getShoppingList, addItem } from './_services/shopping-list-service';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas'; 

function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(''); 
  const userId = 'mosmee21';
  
  useEffect(() => {
    const loadItems = async () => {
      const itemList = await getShoppingList(userId);
      setItems(itemList);
    };

    loadItems();
    // The dependency array is empty since userId will not change
  }, []); // if userId is constant; if it can change, use [userId]

  const handleAddItem = async (newItem) => {
    const newItemId = await addItem(userId, newItem);
    newItem.id = newItemId;
    setItems(prevItems => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanName = item.name.split(',')[0].trim().replace(/[^a-zA-Z ]/g, '');
    setSelectedItemName(cleanName);
  };

  return (
    <div className=" bg-gradient-to-r from-lime-500 to-cyan-500 min-h-screen">
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