import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import Cookies from "js-cookie";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState([]);
  const [loginFailed, setLoginFailed] = useState([]);
  const [loading, setLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await api.post("/login", { email, password });
      Cookies.set("token", response.data.data.token);
      Cookies.set("user", JSON.stringify(response.data.data.user));

      setIsAuthenticated(true);

      navigate("/admin/dashboard", { replace: true });
    } catch (error) {
      setValidation(error.response.data);
      setLoginFailed(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 bg-white mb-4 rounded-xl shadow-lg w-1/2 mx-auto">
      <h1 className="text-3xl font-semibold mb-2">Login</h1>
      {validation.errors && (
        <div className="flex flex-col text-red-600 gap-y-2 my-3">
          {validation.errors.map((error, i) => (
            <p className="text-sm" key={i}>
              {error.path} : {error.msg}
            </p>
          ))}
        </div>
      )}

      {loginFailed.message && (
        <div className="flex flex-col text-red-600 gap-y-2 my-3">
          <p className="text-sm">{loginFailed.message}</p>
        </div>
      )}
      <hr />
      <form onSubmit={login} className="flex flex-col gap-4">
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
          {loading ? "Loading..." : " Register"}
        </button>
      </form>
    </div>
  );
}
