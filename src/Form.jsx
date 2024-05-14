import { useState } from "react";

function Form({ onAddItems }) {
  const [itemName, setItemName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!itemName) return;

    const newItem = {
      name: itemName,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);
    setItemName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Items to Your Backpack</h2>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      ></input>
      <button>Add Item</button>
    </form>
  );
}

export default Form;
