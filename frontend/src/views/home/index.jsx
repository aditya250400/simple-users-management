import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="py-5 bg-white p-5 mb-4 w-full  rounded-lg  shadow-sm flex flex-col gap-y-4">
        <h1 className="text-2xl font-semibold">Users Management </h1>
        <p>Study case with Express and React</p>
        <hr />
        <div className="flex flex-row-reverse items-center gap-2 ">
          <Link
            to="/register"
            className="bg-sky-600 text-white p-2 text-center rounded-lg flex-1"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-slate-600 text-white p-2 text-center rounded-lg flex-1"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
