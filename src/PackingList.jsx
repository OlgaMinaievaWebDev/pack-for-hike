import PackingItem from "./PackingItem";

export default function PackingList({ items, onDeleteItems }) {
  return (
    <div className="items-list">
      <ul>
        {items.map((item) => (
          <PackingItem
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
          />
        ))}
      </ul>
    </div>
  );
}
