import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTask }) {
  return (
    <section className="space-y-5">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTask={deleteTask}
        />
      ))}
    </section>
  );
}

export default TodoList;