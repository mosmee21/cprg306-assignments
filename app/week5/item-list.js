"use client"

import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  let items = [...itemsData];

  if (sortBy === "name") {
    items.sort((item1, item2) => item1.name.localeCompare(item2.name));}
  else if (sortBy === "category") {
    items.sort((item1, item2) => item1.category.localeCompare(item2.category));}
  
    return (
      <div className="p-4">
        <button
          onClick={() => setSortBy('name')}
          className={`${sortBy === 'name'} m-5 bg-orange-900 text-amber-300 px-4 py-2 mr-4 `}
        >
          Sort by Name
        </button>
        <button
        onClick={() => setSortBy('category')}
        className={`${sortBy === 'category'} bg-orange-900 text-amber-300 px-4 py-2 ml-2 `}
      >
        Sort by Category
      </button>
      <ul className="mt-5">
        {items.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}