export default function PackingList() {
  return (
    <form>
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
