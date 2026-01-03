import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Home() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (!text) return;

    if (editIndex !== null) {
      const updated = [...items];
      updated[editIndex] = text;
      setItems(updated);
      setEditIndex(null);
    } else {
      setItems([...items, text]);
    }

    setText(""); // clears the input
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setText(items[index]);
    setEditIndex(index);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Events</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        style={{ padding: "8px", width: "250px" }}
      />

      <button onClick={handleAdd} style={{ marginLeft: "10px" }}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {items.map((item, i) => (
          <li key={i} style={{ marginBottom: "10px" }}>
            {item}

            <EditIcon
              onClick={() => handleEdit(i)}
              style={{ cursor: "pointer", marginLeft: "10px" }}
            />

            <DeleteIcon
              onClick={() => handleDelete(i)}
              style={{ cursor: "pointer", marginLeft: "5px", color: "red" }}
            />

            <CheckCircleIcon
              style={{ marginLeft: "5px", color: "green" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
