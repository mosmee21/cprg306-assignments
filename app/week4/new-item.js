"use client";

import { useState } from 'react';

function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
            Quantity:
          </label>
          <input 
            type="number" 
            min="1" 
            max="99" 
            value={quantity} 
            onChange={(e) => setQuantity(Number(e.target.value))} 
            required 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="quantity"
          />
        </div>
        {/* Additional form fields will go here */}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewItem;
