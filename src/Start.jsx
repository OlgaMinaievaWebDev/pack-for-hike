import { useState } from "react";

export default function Start({ setStartPacking }) {
  const [weight, setWeight] = useState(20);

  function handleStartApp() {
    setStartPacking(true);
  }
  return (
    <div className="start-page">
      <h1>Lets pack for a hike</h1>
      <p>Choose your backpack capacity</p>
      <select
        className="choose-weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      >
        {Array.from({ length: 55 }, (_, index) => index + 20).map(
          (num, index) =>
            index % 5 === 0 && <option key={num}>{num} lbs</option>
        )}
      </select>
      <button className="btn-start" onClick={handleStartApp}>
        Start Packing
      </button>
    </div>
  );
}
