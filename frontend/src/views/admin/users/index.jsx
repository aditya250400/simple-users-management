import { Link } from "react-router-dom";
import MainLayout from "../../../layout/MainLayout";

export default function UsersIndex() {
  return (
    <>
      <MainLayout>
        <div className="flex items-center justify-between gap-3 w-full h-[40px] bg-slate-600 rounded-t-lg text-white">
          <p className="p-2">Users</p>
          <div className="p-2">
            <Link
              to="/admin/users/create"
              className=" rounded-lg bg-slate-300 px-2 text-black text-sm"
            >
              Add User
            </Link>
          </div>
        </div>
        <hr />
        <div className="bg-white p-2  h-[500px]">Halo users</div>
      </MainLayout>
    </>
  );
}
