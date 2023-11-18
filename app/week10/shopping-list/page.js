"use client";

import React, { useState, useEffect } from 'react';
import { getItems, addItem } from './_services/shopping-list-service'; // Ensure the path is correct
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas'; 

function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(''); 
  const userId = 'mosmee21'; // Assuming this is a constant, if it's dynamic, use it in the dependency array of useEffect
  
  // Load items from Firestore
  useEffect(() => {
    const loadItems = async () => {
      try {
        const itemList = await getItems(userId); // Using getItems from the service
        setItems(itemList);
      } catch (error) {
        console.error("Error loading items:", error);
        // Handle the error appropriately
      }
    };

    loadItems();
  }, []); // If userId changes dynamically, use [userId]

  // Handle adding a new item
  const handleAddItem = async (newItem) => {
    try {
      const newItemId = await addItem(userId, newItem); // Using addItem from the service
      newItem.id = newItemId;
      setItems(prevItems => [...prevItems, newItem]);
    } catch (error) {
      console.error("Error adding new item:", error);
      // Handle the error appropriately
    }
  };

  // Handle item selection
  const handleItemSelect = (item) => {
    const cleanName = item.name.split(',')[0].trim().replace(/[^a-zA-Z ]/g, '');
    setSelectedItemName(cleanName);
  };

  return (
    <div className="bg-gradient-to-r from-lime-500 to-cyan-500 min-h-screen">
      <h1 className="text-3xl font-bold ml-10 mb-4 text-black">Shopping List</h1>
      <div className="flex space-x-10">
        <div className="w-1/3">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        
        <div className="flex-grow">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </div>
  );
}

export default Page;
