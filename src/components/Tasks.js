import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Tasks() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editID, setEditID] = useState(null);

  const handleAdd = () => {
    if (!input.trim()) return;
    if (editID !== null) {
      setTasks(tasks.map(t => t.id === editID ? { ...t, text: input } : t));
      setEditID(null);
    } else {
      setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    }
    setInput("");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const handleEdit = (task) => {
    setInput(task.text);
    setEditID(task.id);
  };

  const toggleDone = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>StreamList User Actions</h2>
      <input
        type="text"
        placeholder="Add your event here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "8px", width: "60%", borderRadius: "8px" }}
      />
      <button onClick={handleAdd} style={{ padding: "10px", marginLeft: "10px" }}>
        {editID ? "Update" : "Add Event"}
      </button>

      <ul style={{ marginTop: "20px" }}>
        {tasks.map(task => (
          <li 
            key={task.id}
            style={{
              margin: "10px 0",
              display: "flex",
              justifyContent: "space-between",
              textDecoration: task.done ? "line-through" : "none"
            }}
          >
            {task.text}
            <div>
              <CheckCircleIcon onClick={() => toggleDone(task.id)} style={{ cursor: "pointer", marginRight: "10px" }} />
              <EditIcon onClick={() => handleEdit(task)} style={{ cursor: "pointer", marginRight: "10px" }} />
              <DeleteIcon onClick={() => handleDelete(task.id)} style={{ cursor: "pointer" }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
