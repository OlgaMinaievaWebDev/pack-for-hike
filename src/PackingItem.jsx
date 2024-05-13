export default function PackingItem({ item, onDeleteItems }) {
  return (
    <li>
      <input type="checkbox" />
      <span>{item.name}</span>
      <span> {item.weight}lbs</span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
