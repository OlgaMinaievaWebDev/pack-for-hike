import { useEffect } from "react";

export default function Start({
  setStartPacking,
  backpackCapacity,
  setBackpackCapacity,
}) {
  function handleStartApp() {
    setStartPacking(true);
  }

  useEffect(() => {
    localStorage.setItem("backpackCapacity", JSON.stringify(backpackCapacity));
  }, [backpackCapacity]);

  return (
    <div className="start-page">
      <h1>Lets pack for a hike</h1>
      <p>Choose your backpack capacity</p>
      <select
        className="choose-weight"
        value={backpackCapacity}
        onChange={(e) => setBackpackCapacity(e.target.value)}
      >
        {Array.from({ length: 55 }, (_, index) => index + 10).map(
          (num, index) =>
            index % 5 === 0 && (
              <option key={num} value={num}>
                {num}
              </option>
            )
        )}
      </select>
      <button onClick={handleStartApp}>Start Packing</button>
    </div>
  );
}
