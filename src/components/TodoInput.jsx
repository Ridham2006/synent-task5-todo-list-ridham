import { Plus } from "lucide-react";
import { motion } from "framer-motion";

function TodoInput({ task, setTask, addTask }) {

  return (

    <section className="mb-8">

      <div className="flex gap-4">

        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your next task..."
          className="
            flex-1
            px-5
            py-4
            rounded-2xl
            bg-slate-800
            border
            border-slate-700
            text-white
            placeholder:text-slate-400
            outline-none
            transition-all
            duration-300
            focus:border-violet-500
            focus:ring-4
            focus:ring-violet-500/20
          "
        />

        <motion.button

       
whileTap={{
  scale: 0.95,
}}

transition={{
  type: "spring",
  stiffness: 300,
}}
          onClick={addTask}
          className="
            flex
            items-center
            gap-2
            px-6
            rounded-2xl
            bg-violet-600
            text-white
            font-semibold
            transition-all
            duration-300
            hover:bg-violet-500
            hover:scale-105
            hover:shadow-lg
            hover:shadow-violet-500/40
          "
        >
          <Plus size={20} />
          Add Task
        </motion.button>

      </div>

    </section>

  );
}

export default TodoInput;