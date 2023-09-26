import React from 'react';
import ItemList from './item-list';

function Page() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl mb-4">Shopping List</h1>
      <ItemList />
    </div>
  );
}

export default Page;

