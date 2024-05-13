import { useState } from "react";

function Form() {
  const [itemName, setItemName] = useState("");
  const [itemWeight, setItemWeight] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Packing Items</h2>
      <input type="text" placeholder="Item Name"></input>
      <input
        type="number"
        placeholder="Item Weight (lbs)"
        min={1}
        max={60}
      ></input>
      <button>Add Item</button>
    </form>
  );
}

export default Form;
