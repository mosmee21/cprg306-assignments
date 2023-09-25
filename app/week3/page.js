import React from 'react';
import ItemList from './item-list';  // Import the ItemList component

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-center text-3xl font-bold mb-6 text-blue-900">Shopping List</h1>
      <div className="container mx-auto max-w-2xl">
        <ItemList />
      </div>
    </main>
  );
};

export default Page;
