import MainLayout from "../../../layout/MainLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import api from "../../../services/api";

export default function UsersCreate() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validations, setValidations] = useState([]);

  const [loading, setLoading] = useState(false);

  const storeUser = async (e) => {
    const token = Cookies.get("token");

    e.preventDefault();
    api.defaults.headers.common["Authorization"] = token;

    try {
      setLoading(true);
      await api.post("/admin/users", {
        name,
        email,
        password,
      });
      navigate("/admin/users");
    } catch (error) {
      setValidations(error.response.data.errors);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <MainLayout>
        <div className="flex items-center justify-between gap-3 w-full bg-slate-600 rounded-t-lg text-white">
          <p className="p-2">Users</p>
          <p className="text-white p-2">Add User Page</p>
        </div>
        <hr />
        <div className="bg-white p-2  h-[500px]">
          <div className="my-3">
            {validations && (
              <div className="text-red-500 text-sm flex flex-col gap-y-1">
                {validations.map((error, i) => (
                  <p key={i}>
                    {error.path} : {error.msg}
                  </p>
                ))}
              </div>
            )}
          </div>

          <form onSubmit={storeUser} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                className="rounded-lg p-2 border border-slate-700"
                placeholder="Enter full name"
              />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className="rounded-lg p-2 border border-slate-700"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                className="rounded-lg p-2 border border-slate-700"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`p-3 rounded-xl text-white text-center bg-slate-800 hover:bg-slate-700 ${
                loading ? "hover:cursor-not-allowed opacity-50" : ""
              }`}
            >
              {loading ? "Loading..." : " Save"}
            </button>
          </form>
        </div>
      </MainLayout>
    </>
  );
}
