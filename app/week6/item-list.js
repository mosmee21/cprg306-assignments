"use client";

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Item from './item';

function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");


  const sortedItems = [...items].sort((item1, item2)=> {
    if (sortBy === "name") {
      return  item1.name.localeCompare(item2.name);
    } else if (sortBy === "category") {
      return item1.category.localeCompare(item2.category);
    }
    return 0;
  });
  
  return (
    <div className="p-4 ">
      <button
        onClick={() => setSortBy('name')}
        className={`${sortBy === 'name' ? 'active-class' : ''} m-5 bg-orange-900 text-amber-300 px-2 py-2 mr-4 mt-0`}
      >
        Sort by Name
      </button>
      <button
        onClick={() => setSortBy('category')}
        className={`${sortBy === 'category' ? 'active-class' : ''} bg-orange-900 text-amber-300 px-2 py-2 ml-2 `}
      >
        Sort by Category
      </button>
      <ul>
        {items.map(item => (
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
  ),
};

ItemList.defaultProps = {
  items: [],
};

export default ItemList;
