import React from 'react';

function Item({ name, quantity, category }) {
  return (
    <li className="bg-blue-200 border p-4 m-5 rounded-md shadow-md mb-4 max-w-xs">
      <h3 className="font-bold text-xl mb-2 text-blue-700">{name}</h3>
      <p className="text-gray-700 text-base mb-1 pl-2 py-1">Buy {quantity} in {category}</p>
    </li>
  );
}

export default Item;

