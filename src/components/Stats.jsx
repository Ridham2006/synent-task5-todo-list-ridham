import { motion } from "framer-motion";
function Stats({ todos }) {

  const totalTasks = todos.length;

  const completedTasks = todos.filter(
    (todo) => todo.completed
  ).length;

  const remainingTasks = totalTasks - completedTasks;

  return (

    <motion.section
    className="mt-8 mb-4">

      <div className="grid grid-cols-3 gap-4">

        <div
          className="
          bg-slate-900
          rounded-2xl
          p-5
          border
          border-slate-800
          text-center
          "
        >

          <h3 className="text-slate-400 text-sm">

            Total

          </h3>

          <p className="text-3xl font-bold text-white mt-2">

            {totalTasks}

          </p>

        </div>

        <div
          className="
          bg-slate-900
          rounded-2xl
          p-5
          border
          border-green-600
          text-center
          "
        >

          <h3 className="text-green-400 text-sm">

            Completed

          </h3>

          <p className="text-3xl font-bold text-green-400 mt-2">

            {completedTasks}

          </p>

        </div>

        <div
          className="
          bg-slate-900
          rounded-2xl
          p-5
          border
          border-violet-600
          text-center
          "
        >

          <h3 className="text-violet-400 text-sm">

            Remaining

          </h3>

          <p className="text-3xl font-bold text-violet-400 mt-2">

            {remainingTasks}

          </p>

        </div>

      </div>

    </motion.section>

  );
}

export default Stats;