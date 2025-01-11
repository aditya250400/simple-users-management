/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import MainLayout from "../../../layout/MainLayout";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import api from "../../../services/api";

export default function UsersIndex() {
  const [users, setUsers] = useState([]);
  const [loadingId, setLoadingId] = useState(null);

  const fetchDataUsers = async () => {
    const token = Cookies.get("token");

    if (token) {
      api.defaults.headers.common["Authorization"] = token;
    }
    try {
      const response = await api.get("/admin/users");
      setUsers(response.data.data);
    } catch (error) {
      console.error("There was an error fetching the users!", error);
    }
  };

  const deleteUser = async (id) => {
    const token = Cookies.get("token");

    if (token) {
      api.defaults.headers.common["Authorization"] = token;
    }

    try {
      setLoadingId(id);
      await api.delete(`/admin/users/${id}`);
      fetchDataUsers();
    } catch (error) {
      console.error("There was an error deleting the user!", error);
    } finally {
      setLoadingId(null);
    }
  };

  useEffect(() => {
    fetchDataUsers();

    return () => {
      setUsers([]);
    };
  }, []);

  return (
    <>
      <MainLayout>
        <div className="flex items-center justify-between gap-3 w-full h-[40px] bg-slate-600 rounded-t-lg text-white">
          <p className="p-2">Users</p>
          <div className="p-2">
            <Link
              to="/admin/users/create"
              className="rounded-lg bg-slate-300 px-2 text-black text-sm"
            >
              Add User
            </Link>
          </div>
        </div>
        <hr />
        <div className="overflow-x-auto bg-white">
          <table className="table text-center">
            {/* head */}
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id}>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>
                      <div className="flex items-center justify-center gap-2">
                        <Link
                          to={`/admin/users/edit/${user.id}`}
                          className="text-center bg-blue-700 text-white p-2 rounded-lg"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => deleteUser(user.id)}
                          className={`text-center bg-red-700 text-white p-2 rounded-lg ${
                            loadingId === user.id
                              ? "hover:cursor-not-allowed opacity-50"
                              : ""
                          }`}
                          disabled={loadingId === user.id}
                        >
                          {loadingId === user.id ? "Deleting..." : "Delete"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3}>Tidak Ada Data</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </MainLayout>
    </>
  );
}
