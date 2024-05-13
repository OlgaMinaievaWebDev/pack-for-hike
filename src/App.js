import { useState } from "react";
import Start from "./Start";
import PackingList from "./PackingList";
import Form from "./Form";

function App() {
  const [startPacking, setStartPacking] = useState(false);
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== item.id));
  }

  return (
    <div className="App">
      {startPacking ? (
        <>
          <Form onAddItems={handleAddItems} />
          <PackingList items={items} onDeleteItems={handleDeleteItems} />
        </>
      ) : (
        <Start setStartPacking={setStartPacking} />
      )}
    </div>
  );
}

export default App;
