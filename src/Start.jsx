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
      <h1>Pack For A Hike</h1>
      <button onClick={handleStartApp}>Start</button>
    </div>
  );
}
