import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTask, toggleComplete }) {
  return (
    <section className="space-y-5">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </section>
  );
}

export default TodoList;