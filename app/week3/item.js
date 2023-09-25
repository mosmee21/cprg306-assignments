import React from 'react';

function Item({ name, quantity, category }) {
  return (
    <li className="bg-blue-300 border p-4  mb-4">
      <h3 className="font-bold text-xl mb-2 text-blue-800">Name:{name}</h3>
      <p className="text-black-400 text-base mb-1 pl-2 py-1">Quantity: {quantity}</p>
      <p className="text-green-500 text-sm pl-2 py-1">Category: {category}</p>
    </li>
  );
}

export default Item;
