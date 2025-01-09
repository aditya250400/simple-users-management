import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="p-5 mb-4 bg-white rounded-3 shadow-sm min-h-screen flex justify-center align-center">
        <div className="py-5">
          <h1 className="text-2xl font-semibold">Users Managemenet </h1>
          <p>Study case with Express and React</p>
          <hr />
          <Link
            to="/register"
            className="bg-sky-600 text-white p-2 text-center rounded-lg"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-slate-600 text-white p-2 text-center rounded-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
