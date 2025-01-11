/* eslint-disable react/prop-types */
import SidebarMenu from "../components/SidebarMenu";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col  md:flex-row gap-4 items-center md:items-start pb-20  ">
      <div className="w-full px-4 md:px-0 md:w-4/12">
        <SidebarMenu />
      </div>
      <div className="w-full  px-4 md:px-0 md:w-8/12  h-[500px] ">
        {children}
      </div>
    </div>
  );
}
