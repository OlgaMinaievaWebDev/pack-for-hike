import { useState } from "react";

function Form({ onAddItems, backpackCapacity }) {
  const [itemName, setItemName] = useState("");
  const [itemWeight, setItemWeight] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!itemName) return;
    if (!itemWeight) return;

    const newItem = {
      name: itemName,
      weight: itemWeight,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);
    onAddItems(newItem);
    setItemName("");
    setItemWeight("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Items to Your {backpackCapacity}lbs Backpack</h2>
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
