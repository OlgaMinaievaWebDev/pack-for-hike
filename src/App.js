import { useEffect, useState } from "react";
import Start from "./Start";
import PackingList from "./PackingList";
import Form from "./Form";

function App() {
  const [startPacking, setStartPacking] = useState(false);

  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="App">
      {startPacking ? (
        <>
          <Form onAddItems={handleAddItems} />
          <PackingList
            items={items}
            onDeleteItems={handleDeleteItems}
            onToggleItem={handleToggleItem}
            onClearList={handleClearList}
          />
        </>
      ) : (
        <Start setStartPacking={setStartPacking} />
      )}
    </div>
  );
}

export default App;
