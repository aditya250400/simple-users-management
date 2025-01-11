import MainLayout from "../../../layout/MainLayout";

export default function UsersEdit() {
  return (
    <>
      <MainLayout>
        <div className="flex items-center justify-between gap-3 w-full bg-slate-600 rounded-t-lg text-white">
          <p className="p-2">Users</p>
          <p className="text-white p-2">Edit User Page</p>
        </div>
        <hr />
        <div className="bg-white p-2  h-[500px]">Halo users</div>
      </MainLayout>
    </>
  );
}
