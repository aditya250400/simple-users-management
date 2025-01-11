import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import MainLayout from "../../../layout/MainLayout";

export default function Dashboard() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const userData = Cookies.get("user");

    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);
  return (
    <MainLayout>
      <h1 className="p-2 w-full bg-slate-600 rounded-t-lg text-white ">
        Dashboard
      </h1>
      <div className="bg-white p-2  h-[500px]">
        <p>
          Selamat Datang <span className="font-bold">{user?.name}</span>
        </p>
      </div>
    </MainLayout>
  );
}
