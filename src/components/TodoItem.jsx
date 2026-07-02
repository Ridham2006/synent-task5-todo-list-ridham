import {
  Pencil,
  Trash2,
  Circle,
  CheckCircle2,
  Check,
  X,
} from "lucide-react";

function TodoItem({   todo,
  deleteTask,
  toggleComplete,
  editingId,
  editText,
  setEditText,
  startEditing,
  saveTask,
  cancelEditing, }) {

  return (
    <div
      className={`
        rounded-2xl
        p-5
        flex
        justify-between
        items-center
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl

        ${
          todo.completed
            ? "border border-green-500 bg-green-500/5"
            : "border border-slate-800 bg-slate-900 hover:border-violet-300 hover:shadow-violet-500/10"
        }
      `}
    >
      {/* Left Side */}

      <div className="flex items-center gap-4">

        <button onClick={() => toggleComplete(todo.id)}>

          {todo.completed ? (
            <CheckCircle2 className="text-green-500" />
          ) : (
            <Circle className="text-slate-500" />
          )}

        </button>

       
          {
  editingId === todo.id ? (

    <input
      type="text"
      value={editText}
      onChange={(e) => setEditText(e.target.value)}
      className="
        bg-slate-800
        text-white
        px-3
        py-2
        rounded-lg
        border
        border-violet-500
        outline-none
        w-full
      "
    />

  ) : (

    <h3
      className={`text-lg font-semibold ${
        todo.completed
          ? "line-through text-slate-500"
          : "text-white"
      }`}
    >
      {todo.text}
    </h3>

  )
}
        

      </div>

      {/* Right Side */}

      <div className="flex gap-3">

        

        {
  editingId === todo.id ? (

    <>
      <button
        onClick={() => saveTask(todo.id)}
        className="p-2 rounded-xl hover:bg-green-600 transition"
      >
        <Check size={18} />
      </button>

      <button
        onClick={cancelEditing}
        className="p-2 rounded-xl hover:bg-slate-500 transition"
      >
        <X size={18} />
      </button>
    </>

  ) : (

    <button
      onClick={() => startEditing(todo)}
      className="p-2 rounded-xl hover:bg-violet-500 transition"
    >
      <Pencil size={18} />
    </button>

  )
}

        <button
          onClick={() => deleteTask(todo.id)}
          className="p-2 rounded-xl hover:bg-red-500 transition"
        >
          <Trash2 size={18} />
        </button>

      </div>

    </div>
  );
}

export default TodoItem;