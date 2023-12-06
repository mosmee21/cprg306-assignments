"use client";
import { useEffect, useState } from "react";
import { addItem, getItems } from "../_services/shopping-list-service";
import { auth } from "../_utils/firebase";

import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";

function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        
        const unsubscribe = auth.onAuthStateChanged(currentUser => {
            setUser(currentUser);
            if (currentUser) {
                loadItems(currentUser.uid);
            }
        });

       
        return () => unsubscribe();
    }, []);

    
    async function loadItems(uid) {
        try {
            const fetchedItems = await getItems(uid);
            setItems(fetchedItems);
        } catch (error) {
            console.error("Error loading items:", error);
        }
    }

    
    async function handleAddItem(newItem) {
        if (user) {
            try {
                const docId = await addItem(user.uid, newItem);
                setItems(prevItems => [...prevItems, { ...newItem, id: docId }]);
            } catch (error) {
                console.error("Error adding item:", error);
            }
        }
    }

    function handleItemSelect(itemName) {
        const cleanedName = itemName.split(',')[0].trim().replace(/[^a-zA-Z ]/g, "");
        setSelectedItemName(cleanedName);
    }

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
