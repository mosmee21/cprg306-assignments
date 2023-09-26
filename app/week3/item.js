import React from 'react';

function Item({ name, quantity, category }) {
  return (
    <main className="bg-blue-200 border p-4 m-5  shadow-md mb-4 max-w-xs">
      <h3 className="font-bold text-xl mb-2 text-blue-700">{name}</h3>
      <p className="text-gray-700 text-base mb-1 pl-2 py-1"> Buy {quantity} in {category}</p>
    </main>
  );
}

export default Item;

