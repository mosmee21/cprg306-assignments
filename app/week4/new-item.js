"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    alert("Name: " + name + "\n" + "Quantity: " + quantity + "\n" + "Category: " + category);
    const item = { name, quantity, category };
    console.log(item);
    setName("");
    setQuantity(1);
    setCategory("Produce");
};
return (
  <main>
      <div className="min-h-screen bg-blue-gray-100 flex items-center justify-center">
        <div className="w-full max-w-md bg-blue-900 p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <label className="block mb-4">
              <span className="text-white">Name:</span>
              <input
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
              />
            </label>
            <div className="flex justify-between mb-4">
              <div className="w-1/2 pr-2">
              <label className="block mb-4">
                <span className="text-white">Quantity:</span>
                <input
                  type="number"
                  min="1"
                  max="99"
                  required
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  value={quantity}
                  className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                />
              </label>
            </div>
            <div className="w-1/2 pl-2">
            <label className="block mb-4">
              <span className="text-white">Category:</span>
              <select
                required
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
              >
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
              </select>
            </label>
            </div>
            </div>
             <button type="submit"className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white">
              Submit
            </button>
          </form>
        </div>
      </div>

    </main>
  );
}
