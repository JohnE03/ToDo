import React, {useState} from "react";
import TodoList from "./Components/TodoList/TodoList";
import Modal from "./Components/Modal/Modal";
import Button from "./Components/Button/Button";

function App() {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos((prev) => [...prev, { id: Date.now(), text: input }]);
    setInput("");
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div style={{ maxWidth: 500, justifyContent: "center", margin: "0 auto", padding: "1rem" }}>
      <h1>Todo App ✅</h1>

      <Button onClick={() => setShowModal(true)}>+ Add Todo</Button>

      <div style={{ marginTop: "1rem" }}>
        <TodoList todos={todos} onDelete={handleDelete} />
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2>New Task</h2>
        <form onSubmit={handleAdd} style={{ display: "flex", gap: "8px" }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type something..."
            className="border p-2 rounded flex-1"
          />
          <Button type="submit">Save</Button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
