function FilterButtons() {
  return (
    <section className="mb-8">

      <div className="flex justify-center gap-4">

        <button
          className="
            px-5
            py-2.5
            rounded-full
            bg-violet-600
            text-white
            font-medium
            transition-all
            duration-300
            hover:scale-105
            hover:bg-violet-500
          "
        >
          All
        </button>

        <button
          className="
            px-5
            py-2.5
            rounded-full
            bg-slate-800
            text-slate-300
            font-medium
            transition-all
            duration-300
            hover:bg-slate-700
            hover:text-white
            hover:scale-105
          "
        >
          Active
        </button>

        <button
          className="
            px-5
            py-2.5
            rounded-full
            bg-slate-800
            text-slate-300
            font-medium
            transition-all
            duration-300
            hover:bg-slate-700
            hover:text-white
            hover:scale-105
          "
        >
          Completed
        </button>

      </div>

    </section>
  );
}

export default FilterButtons;