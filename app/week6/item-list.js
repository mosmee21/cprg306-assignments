"use client";

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Item from './item';

function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((item1, item2) => {
    if (sortBy === "name") {
      return item1.name.localeCompare(item2.name);
    } else if (sortBy === "category") {
      return item1.category.localeCompare(item2.category);
    }
    return 0;
  });
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
          className={`${sortBy === 'name'} m-5 bg-orange-900 text-amber-300 px-2 py-2 mr-4 `}
        >
          Sort by Name
        </button>
        <button
        onClick={() => setSortBy('category')}
        className={`${sortBy === 'category'} bg-orange-900 text-amber-300 px-2 py-2 ml-2 mr-2 `}
      >
        Sort by Category
      </button>
      <button
        onClick={() => setSortBy('grouped')}
        className={`${sortBy === 'grouped'} bg-orange-900 text-amber-300 px-4 py-2 ml-4 `}
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

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ItemList;
