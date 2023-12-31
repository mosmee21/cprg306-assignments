"use client";

import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  
  let items = [...itemsData];

  let groupedItems = {};

  if (sortBy === 'grouped') {
    groupedItems = items.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});
  }

  if (sortBy === "name") {
    items.sort((item1, item2) => item1.name.localeCompare(item2.name));}
  else if (sortBy === "category") {
    items.sort((item1, item2) => item1.category.localeCompare(item2.category));}
  return (
      <div className="p-4">
        <div className="flex items-center flex-wrap-nowrap ml-4">
        <button
          onClick={() => setSortBy('name')}
          className={`${sortBy === 'name'}  bg-orange-900 text-amber-300 px-2 py-2 m-1 `}
        >
          Sort by Name
        </button>
        <button
        onClick={() => setSortBy('category')}
        className={`${sortBy === 'category'} bg-orange-900 text-amber-300 px-2 py-2 m-1 `}
      >
        Sort by Category
      </button>
      <button
        onClick={() => setSortBy('grouped')}
        className={`${sortBy === 'grouped'} bg-orange-900 text-amber-300 px-2 py-2 m-1 `}
        >
        Group by Category
      </button>
      </div>
      <ul>
        {sortBy === 'grouped'
          ? Object.keys(groupedItems).sort().map(category => (
              <li key={category}>
                <strong className="capitalize text-black">{category}</strong>
                <ul>
                  {groupedItems[category].map(item => (
                    <Item key={item.id} {...item} />
                  ))}
                </ul>
              </li>
            ))
          : items.map(item => (
              <Item key={item.id} {...item} />
            ))}
      </ul>
    </div>
  );
}