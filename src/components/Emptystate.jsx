function EmptyState() {
  return (
    <motion.div className="text-center py-20">

      <h2 className="text-2xl font-bold text-slate-300">
        No Tasks Yet
      </h2>

      <p className="text-slate-500 mt-3">
        Add your first task to get started.
      </p>

    </motion.div>
  );
}

export default EmptyState;