import SidebarMenu from "../../../components/SidebarMenu";

export default function Dashboard() {
  return (
    <div className="flex flex-col  md:flex-row gap-4 items-center md:items-start pb-20">
      <div className="w-full px-4 md:w-4/12">
        <SidebarMenu />
      </div>
      <div className="w-full  px-4 md:w-8/12  h-[500px] ">
        <h1 className="p-2 w-full bg-slate-600 rounded-t-lg text-white ">
          Dashboard
        </h1>
        <div className="bg-white  h-[500px]"></div>
      </div>
    </div>
  );
}
