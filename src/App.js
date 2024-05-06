import { useState } from "react";
import Start from "./Start";
import PackingList from "./PackingList";

function App() {
  const [startPacking, setStartPacking] = useState(false);

  return (
    <div className="App">
      {startPacking ? (
        <PackingList />
      ) : (
        <Start setStartPacking={setStartPacking} />
      )}
    </div>
  );
}

export default App;
