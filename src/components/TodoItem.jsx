import { Pencil, Trash2 } from "lucide-react";

function TodoItem({ todo,deleteTask }) {

  return (

    <div
      className="
      bg-slate-900
      border
      border-slate-800
      rounded-2xl
      p-5
      flex
      justify-between
      items-center
      transition-all
      duration-300
      hover:border-violet-500
      hover:-translate-y-1
      hover:shadow-xl
      hover:shadow-violet-500/10
      "
    >

      <div>

        <h3 className="text-white text-lg font-semibold">

          {todo.text}

        </h3>

      </div>

      <div className="flex gap-3">

        <button className="p-2 rounded-xl hover:bg-violet-600 transition">

          <Pencil size={18} />

        </button>
      <button className="p-2 rounded-xl hover:bg-red-600 transition"
        className="
        p-2
        rounded-xl
        hover:bg-red-600
        transition
        "
         onClick={() => deleteTask(todo.id)}
         >
          <Trash2 size={18} />

        </button>

      </div>

    </div>

  );
}

export default TodoItem;