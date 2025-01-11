import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Cookies from "js-cookie";

export default function SidebarMenu() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");

    setIsAuthenticated(false);

    navigate("/login", {
      replace: true,
    });
  };

  const dashboard =
    location.pathname == "/admin/dashboard" ? "bg-slate-300" : "";
  const users = location.pathname == "/admin/users" ? "bg-slate-300" : "";

  return (
    <div className=" bg-white h-fit rounded-lg flex flex-col gap-3 ">
      <h1 className="p-2 w-full bg-slate-600 rounded-t-lg text-white">Menu</h1>

      <di className="m-2 p-2 flex flex-col gap-2 border">
        <Link
          to="/admin/dashboard"
          className={`hover:bg-slate-300  ${dashboard}`}
        >
          Dashboard
        </Link>
        <Link to="/admin/users " className={`hover:bg-slate-300  ${users}`}>
          Users
        </Link>
        <hr />
        <button
          to="/admin/users"
          onClick={logout}
          className="self-start hover:bg-slate-300 w-full text-start"
        >
          Logout
        </button>
      </di>
    </div>
  );
}
