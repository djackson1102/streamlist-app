import React, { useState } from "react";

export default function Events() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!text.trim()) return;
    setItems([...items, { id: Date.now(), name: text, done: false }]);
    setText("");
  };

  const toggleDone = (id) =>
    setItems(items.map(i => i.id === id ? { ...i, done: !i.done } : i));

  const removeItem = (id) =>
    setItems(items.filter(i => i.id !== id));

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your StreamList</h1>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Add show or movie..." />
      <button onClick={addItem}>Add</button>

      <ul style={{ marginTop: "20px" }}>
        {items.map(item => (
          <li key={item.id} style={{ textDecoration: item.done ? "line-through" : "none" }}>
            {item.name}
            <button onClick={() => toggleDone(item.id)}>✔</button>
            <button onClick={() => removeItem(item.id)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
