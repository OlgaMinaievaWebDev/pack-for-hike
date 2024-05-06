import { useState } from "react";
import Start from "./Start";
import Packing from "./Packing";

function App() {
  const [startPacking, setStartPacking] = useState(false);

  return (
    <div className="App">
      {startPacking ? <Packing /> : <Start setStartPacking={setStartPacking} />}
    </div>
  );
}

export default App;
