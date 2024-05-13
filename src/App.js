import { useState } from "react";
import Start from "./Start";
import PackingList from "./PackingList";
import Form from "./Form";

function App() {
  const [startPacking, setStartPacking] = useState(false);
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div className="App">
      {startPacking ? (
        <>
          <Form onAddItems={handleAddItem} />
          <PackingList items={items} />
        </>
      ) : (
        <Start setStartPacking={setStartPacking} />
      )}
    </div>
  );
}

export default App;
