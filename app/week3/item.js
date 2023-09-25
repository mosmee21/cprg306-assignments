import React from 'react';

function Item({ name, quantity, category }) {
  return (
    <li className="bg-blue-100 border p-4 rounded-md shadow-md mb-4">
      <h3 className="font-bold text-xl mb-2 text-blue-700">{name}</h3>
      <p className="text-gray-700 text-base mb-1 pl-2 py-1">Quantity: {quantity}</p>
      <p className="text-gray-500 text-sm pl-2 py-1">Category: {category}</p>
    </li>
  );
}

export default Item;
