import { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/TodoList";


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

        <TodoList todos={todos} />

   

      </div>
    </main>
  );
}

export default App;