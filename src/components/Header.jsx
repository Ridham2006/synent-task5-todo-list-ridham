import { CheckCircle2 } from "lucide-react";
const Header = () => {
  return (
     <header className="text-center mb-10">

      <div className="flex justify-center items-center gap-3">

        <CheckCircle2
          className="text-indigo-500"
          size={42}
        />

        <h1 className="text-5xl font-extrabold text-white">

          TaskFlow

        </h1>

      </div>

      <p className="mt-4 text-slate-400 text-lg">

        Organize your work. Boost your productivity.

      </p>

    </header>
  );
  
}
export default Header
