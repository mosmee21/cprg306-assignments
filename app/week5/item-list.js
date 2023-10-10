"use client";
import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  let items = [...itemsData];

  if (sortBy === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));}
  else if (sortBy === "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));}
  
    return (
      <div className="p-4">
        <button
          onClick={() => setSortBy('name')}
          className={`bg-${sortBy === 'name' ? 'blue' : 'gray'}-500 text-white px-4 py-2 mr-2 rounded`}
        >
          Sort by Name
        </button>
        <button
        onClick={() => setSortBy('category')}
        className={`bg-${sortBy === 'category' ? 'blue' : 'gray'}-500 text-white px-4 py-2 rounded`}
      >
        Sort by Category
      </button>
      <ul className="mt-4">
        {items.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}