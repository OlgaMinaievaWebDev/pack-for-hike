import { useState } from "react";
import PackingItem from "./PackingItem";

export default function PackingList({
  items,
  onDeleteItems,
  onToggleItem,
  onClearList,
}) {
  const [sortedBy, setSortedBy] = useState("input");
  let sortedItems = [];
  if (sortedBy === "input") {
    sortedItems = items;
  } else if (sortedBy === "alphabetically") {
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortedBy === "packed") {
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
  }

  return (
    <div className="items-list">
      <ul>
        {sortedItems.map((item) => (
          <PackingItem
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItem={onToggleItem}
            onClearList={onClearList}
          />
        ))}
      </ul>
      {items.length > 0 && (
        <div className="actions">
          <select
            value={sortedBy}
            onChange={(e) => setSortedBy(e.target.value)}
          >
            <option value="input">Sort by input order</option>
            <option value="alphabetically">Sort alphabetically</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={onClearList}>Clear List</button>
        </div>
      )}
    </div>
  );
}
