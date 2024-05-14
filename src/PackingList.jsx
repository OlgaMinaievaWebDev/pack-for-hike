import PackingItem from "./PackingItem";

export default function PackingList({
  items,
  onDeleteItems,
  onToggleItem,
  onClearList,
}) {
  return (
    <div className="items-list">
      <ul>
        {items.map((item) => (
          <PackingItem
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItem={onToggleItem}
            onClearList={onClearList}
          />
        ))}
      </ul>
      {items.length > 0 && <button onClick={onClearList}>Clear List</button>}
    </div>
  );
}
