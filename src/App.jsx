import { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";

function App() {

  const [task, setTask] = useState("");

  const [todos, setTodos] = useState([]);

  const addTask = () => {

    if (task.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);

    setTask("");

  };
      const deleteTask=(id)=>{
      const updatetodos = todos.filter((todos)=>{
        return todos.id!==id;
      })
      setTodos(updatetodos)
    };

    const toggleComplete = (id) => {

  const updatedTodos = todos.map((todo) => {

    if (todo.id === id) {

      return {
        ...todo,
        completed: !todo.completed,
      };

    }

    return todo;

  });

  setTodos(updatedTodos);

};

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="max-w-4xl mx-auto py-16 px-6">

        <Header />

        <TodoInput
          task={task}
          setTask={setTask}
          addTask={addTask}
        />

        <FilterButtons />

        <TodoList 
    todos={todos}
    deleteTask={deleteTask}
    toggleComplete={toggleComplete} />

    

      </div>
    </main>
  );
}

export default App;