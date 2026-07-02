import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/TodoList";
import EmptyState from "./components/EmptyState";
import Stats from "./components/Stats";

function App() {

  const [task, setTask] = useState("");

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [editingId, setEditingId] = useState(null);

  const [editText, setEditText] = useState("");

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


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

const startEditing = (todo) => {

  setEditingId(todo.id);

  setEditText(todo.text);

};

const saveTask = (id) => {

  if (editText.trim() === "") return;

  const updatedTodos = todos.map((todo) => {

    if (todo.id === id) {

      return {
        ...todo,
        text: editText,
      };

    }

    return todo;

  });

  setTodos(updatedTodos);

  setEditingId(null);

  setEditText("");

};

const cancelEditing = () => {

  setEditingId(null);

  setEditText("");

};

const filteredTodos = todos.filter((todo) => {

    if(filter==="active"){

        return !todo.completed;

    }

    if(filter==="completed"){

        return todo.completed;

    }

    return true;

});

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="max-w-4xl mx-auto py-16 px-6">

        <Header />

        <TodoInput
          task={task}
          setTask={setTask}
          addTask={addTask}
        />
        <Stats todos={todos} />

       <FilterButtons
  filter={filter}
  setFilter={setFilter}
/>

       {
  todos.length === 0 ? (

    <EmptyState />
    

  ) : (
    
<>

      <TodoList
        todos={filteredTodos}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        editingId={editingId}
        editText={editText}
        setEditText={setEditText}
        startEditing={startEditing}
        saveTask={saveTask}
        cancelEditing={cancelEditing}
      />
      </>
  )
}


      </div>
    </main>
  );
}

export default App;