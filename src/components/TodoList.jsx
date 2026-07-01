import TodoItem from "./TodoItem";

function TodoList({ todos }) {

  return (

    <section className="space-y-5">

      {todos.map((todo) => (

        <TodoItem
          key={todo.id}
          todo={todo}
        />

      ))}

    </section>

  );
}

export default TodoList;