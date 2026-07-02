import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  return (
     <header className="text-center mb-10">

      <motion.div
       initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.5,
    ease: "easeOut",
  }}
      className="flex justify-center items-center gap-3">

        <CheckCircle2
          className="text-indigo-500"
          size={42}
        />

        <h1 className="text-5xl font-extrabold text-white">

          TaskFlow

        </h1>

      </motion.div>

      <p className="mt-4 text-slate-400 text-lg">

        Organize your work. Boost your productivity.

      </p>

    </header>
  );
  
}
export default Header
