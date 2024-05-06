import { useState } from "react";

function App() {
  const [startPacking, setStartPacking] = useState("false");

  return (
    <div className="App">
      <button className="btn-start">Start</button>
    </div>
  );
}

export default App;
