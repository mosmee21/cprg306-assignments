import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Item from './item';

function ItemList({ items, onItemSelect }) {
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

  return (
    <div className="p-4">
      <div className="mb-4">
        <span className="text-lg text-black font-bold mr-2">Sort by:</span>
        <button
          onClick={() => setSortBy('name')}
          className={`${sortBy === 'name' ? 'bg-blue-900' : 'bg-blue-900'} text-white px-4 py-2 mr-2`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`${sortBy === 'category' ? 'bg-blue-900' : 'bg-blue-900'} text-white px-4 py-2`}
        >
          Category
        </button>
        <button
          onClick={() => setSortBy('grouped')}
          className={`${sortBy === 'grouped' ? 'bg-blue-900' : 'bg-blue-900'} text-white px-4 py-2 ml-2`}
        >
          Group 
        </button>
      </div>

      <ul>
        {sortBy === 'grouped'
          ? Object.keys(groupedItems).sort().map(category => (
              <li key={category}>
                <strong className="capitalize text-black">{category}</strong>
                <ul>
                  {groupedItems[category].map(item => (
                    <Item key={item.id} {...item} onItemSelect={onItemSelect}/>
                  ))}
                </ul>
              </li>
            ))
          : sortedItems.map(item => (
              <Item key={item.id} {...item} onItemSelect={onItemSelect}/>
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
    })).isRequired,
  onItemSelect: PropTypes.func.isRequired,
};

export default ItemList;
