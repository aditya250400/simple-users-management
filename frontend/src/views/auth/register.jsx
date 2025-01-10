import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState([]);
  const [loading, setLoading] = useState(false);

  const register = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await api.post("/register", { name, email, password });
      navigate("/login");
      alert("Register Success");
    } catch (error) {
      setValidation(error.response.data);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-5 bg-white mb-4 rounded-xl shadow-lg w-1/2 mx-auto">
      <h1 className="text-3xl font-semibold mb-2">Register</h1>
      {validation.errors && (
        <div className="flex flex-col text-red-600 gap-y-2 my-3">
          {validation.errors.map((error, i) => (
            <p className="text-sm" key={i}>
              {error.path} : {error.msg}
            </p>
          ))}
        </div>
      )}
      <hr />
      <form onSubmit={register} className="flex flex-col gap-4">
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
          {loading ? "Loading..." : " Register"}
        </button>
      </form>
    </div>
  );
}
