"use client"

import { useState } from 'react';
import Item from './item';


export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  
  let items = [...itemsProp];

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
        <button
          onClick={() => setSortBy('name')}
          className={`${sortBy === 'name'? 'active-class' : ''} m-5 bg-orange-900 text-amber-300 px-2 py-2 mr-4 `}
        >
          Sort by Name
        </button>
        <button
        onClick={() => setSortBy('category')}
        className={`${sortBy === 'category' ? 'active-class' : ''} bg-orange-900 text-amber-300 px-2 py-2 ml-2 `}
      >
        Sort by Category
      </button>
      <button
        onClick={() => setSortBy('grouped')}
        className={`${sortBy === 'grouped' ? 'active-class' : ''} bg-orange-900 text-amber-300 px-4 py-2 ml-2 `}
        >
        Group by Category
      </button>
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