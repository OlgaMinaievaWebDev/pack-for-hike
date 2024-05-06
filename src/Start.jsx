export default function Start({ setStartPacking }) {
  function handleStartApp() {
    setStartPacking(true);
  }
  return (
    <div className="start-page">
      <h1>Welcome to Backpack Packing App</h1>
      <button className="btn-start" onClick={handleStartApp}>
        Start Packing
      </button>
    </div>
  );
}
