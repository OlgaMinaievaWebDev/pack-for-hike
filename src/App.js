import { useEffect, useState } from "react";
import Start from "./Start";
import PackingList from "./PackingList";
import Form from "./Form";

function App() {
  const [backpackCapacity, setBackpackCapacity] = useState(() => {
    const storedCapacity = localStorage.getItem("backpackCapacity");
    const parsedCapacity = storedCapacity ? parseInt(storedCapacity) : 0;
    return isNaN(parsedCapacity) ? 0 : parsedCapacity;
  });
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  });
  const [startPacking, setStartPacking] = useState(false);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="App">
      {startPacking ? (
        <>
          <Form
            onAddItems={handleAddItems}
            backpackCapacity={backpackCapacity}
            setStartPacking={setStartPacking}
          />
          <PackingList items={items} onDeleteItems={handleDeleteItems} />
        </>
      ) : (
        <Start
          setStartPacking={setStartPacking}
          backpackCapacity={backpackCapacity}
          setBackpackCapacity={setBackpackCapacity}
        />
      )}
    </div>
  );
}

export default App;
