import AppRoutes from "./routes";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav className="sticky top-0 bg-slate-800 text-white flex justify-between px-4 py-2">
        <Link to="/">Home</Link>
        <h3 className="text-lg">Users Management</h3>
      </nav>

      <div className="max-w-screen-lg mx-auto mt-5">
        <AppRoutes />
      </div>
    </div>
  );
}
