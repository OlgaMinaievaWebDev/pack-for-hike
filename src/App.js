import { useState } from "react";
import Start from "./Start";
import PackingList from "./PackingList";
import Form from "./Form";

function App() {
  const [startPacking, setStartPacking] = useState(false);

  return (
    <div className="App">
      {startPacking ? (
        <>
          <Form />
          <PackingList />
        </>
      ) : (
        <Start setStartPacking={setStartPacking} />
      )}
    </div>
  );
}

export default App;
