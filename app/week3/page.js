import React from 'react';
import ItemList from './item-list';

function Page() {
  return (
    <div className="min-h-screen bg-gray-100 py-2">
      <h1 className="text-left text-3xl font-bold mb-6 m-5 text-blue-600">Shopping List</h1>
      <div className="container mx-auto max-w-2xl"></div>
      <ItemList />
    </div>
  );
}

export default Page;

