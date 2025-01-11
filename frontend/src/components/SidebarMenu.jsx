import { Link } from "react-router-dom";

export default function SidebarMenu() {
  return (
    <div className=" bg-white h-fit rounded-lg flex flex-col gap-3 ">
      <h1 className="p-2 w-full bg-slate-600 rounded-t-lg text-white">Menu</h1>

      <di className="m-2 p-2 flex flex-col gap-2 border">
        <Link to="/admin/dashboard" className="hover:bg-slate-300 ">
          Dashboard
        </Link>
        <Link to="/admin/users " className="hover:bg-slate-300 ">
          Users
        </Link>
        <hr />
        <button
          to="/admin/users"
          className="self-start hover:bg-slate-300 w-full text-start"
        >
          Logout
        </button>
      </di>
    </div>
  );
}
