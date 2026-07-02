function FilterButtons({ filter, setFilter }) {
  return (
    <section className="mb-8">
      <div className="flex justify-center gap-4">

        {/* All Button */}
        <button
          onClick={() => setFilter("all")}
          className={`
            px-5
            py-2
            rounded-full
            transition-all
            duration-300
            hover:scale-105
            ${
              filter === "all"
                ? "bg-violet-600 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }
          `}
        >
          All
        </button>

        {/* Active Button */}
        <button
          onClick={() => setFilter("active")}
          className={`
            px-5
            py-2
            rounded-full
            transition-all
            duration-300
            hover:scale-105
            ${
              filter === "active"
                ? "bg-violet-600 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }
          `}
        >
          Active
        </button>

        {/* Completed Button */}
        <button
          onClick={() => setFilter("completed")}
          className={`
            px-5
            py-2
            rounded-full
            duration-300
            hover:scale-105
            ${
              filter === "completed"
                ? "bg-violet-600 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }
          `}
        >
          Completed
        </button>

      </div>
    </section>
  );
}

export default FilterButtons;