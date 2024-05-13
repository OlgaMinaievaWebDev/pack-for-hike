import PackingItem from "./PackingItem";

export default function PackingList({ items }) {
  return (
    <div className="items-list">
      <ul>
        {items.map((item) => (
          <PackingItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
