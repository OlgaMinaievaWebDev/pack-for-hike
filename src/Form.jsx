import { useState } from "react";

function Form({ onAddItem }) {
  const [itemName, setItemName] = useState("");
  const [itemWeight, setItemWeight] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      itemName,
      itemWeight,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Packing Items</h2>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      ></input>
      <input
        type="number"
        placeholder="Item Weight (lbs)"
        min={1}
        max={60}
        value={itemWeight}
        onChange={(e) => setItemWeight(Number(e.target.value))}
      ></input>
      <button>Add Item</button>
    </form>
  );
}

export default Form;
