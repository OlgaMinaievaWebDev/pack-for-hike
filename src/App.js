import { useState } from "react";
import Start from "./Start";
import PackingList from "./PackingList";
import Form from "./Form";

function App() {
  const [startPacking, setStartPacking] = useState(false);
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      {startPacking ? (
        <>
          <Form />
          <PackingList items={items} />
        </>
      ) : (
        <Start setStartPacking={setStartPacking} />
      )}
    </div>
  );
}

export default App;
