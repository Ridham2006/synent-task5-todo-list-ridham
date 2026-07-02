import { AnimatePresence } from "framer-motion";
import TodoItem from "./TodoItem";

function TodoList({
  todos,
  deleteTask,
  toggleComplete,
  editingId,
  editText,
  setEditText,
  startEditing,
  saveTask,
  cancelEditing,
})
  {
  return (
    <section className="space-y-5">
      {todos.map((todo) => (
        <TodoItem
  key={todo.id}
  todo={todo}
  deleteTask={deleteTask}
  toggleComplete={toggleComplete}
  editingId={editingId}
  editText={editText}
  setEditText={setEditText}
  startEditing={startEditing}
  saveTask={saveTask}
  cancelEditing={cancelEditing}
/>
      ))}
    </section>
  );
}

export default TodoList;