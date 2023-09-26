import React from 'react';

function Item({ name, quantity, category }) {
  return (
    <li className="border-b border-gray-200 py-2">
      <span className="font-bold">{name}</span>
      <p className="mt-2 text-sm text-green-500">Buy {quantity} in {category}</p>
    </li>
  );
}

export default Item;

