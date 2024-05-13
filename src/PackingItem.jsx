export default function PackingItem({ item }) {
  return (
    <li>
      <input type="checkbox" />
      <span>{item.name}</span>
      <span> {item.weight}lbs</span>
      <button>❌</button>
    </li>
  );
}
