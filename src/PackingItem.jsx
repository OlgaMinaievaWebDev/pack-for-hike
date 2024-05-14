export default function PackingItem({ item, onDeleteItems, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.name}
      </span>

      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
