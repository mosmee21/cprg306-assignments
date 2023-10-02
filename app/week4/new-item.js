import { useState } from 'react';

function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <div className="p-6 bg-white">
      <form onSubmit={handleSubmit} className="p-4">
        <div className="mb-4">
          <label className="text-lg mb-2" htmlFor="name">
            Name:
          </label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="p-2 border"
            id="name"
          />
        </div>
        <div className="mb-4">
          <label className="text-lg mb-2" htmlFor="quantity">
            Quantity:
          </label>
          <input 
            type="number" 
            min="1" 
            max="99" 
            value={quantity} 
            onChange={(e) => setQuantity(Number(e.target.value))} 
            required 
            className="p-2 border"
            id="quantity"
          />
        </div>
        <div className="mb-4">
          <label className="text-lg mb-2" htmlFor="category">
            Category:
          </label>
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            required 
            className="p-2 border"
            id="category"
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit" className="p-2 bg-blue-500 text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewItem;
