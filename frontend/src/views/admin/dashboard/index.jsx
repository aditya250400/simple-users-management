import SidebarMenu from "../../../components/SidebarMenu";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function Dashboard() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const userData = Cookies.get("user");

    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);
  return (
    <div className="flex flex-col  md:flex-row gap-4 items-center md:items-start pb-20">
      <div className="w-full px-4 md:w-4/12">
        <SidebarMenu />
      </div>
      <div className="w-full  px-4 md:w-8/12  h-[500px] ">
        <h1 className="p-2 w-full bg-slate-600 rounded-t-lg text-white ">
          Dashboard
        </h1>
        <div className="bg-white p-2  h-[500px]">
          <p>
            Selamat Datang <span className="font-bold">{user?.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
