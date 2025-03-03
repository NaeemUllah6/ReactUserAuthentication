import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex h-screen bg-gray-100">

            <div className="md:w-[200px]">
                <Sidebar />
            </div>

            <div className="flex flex-col flex-1 w-full md:w-[calc(100%-200px]">

                <div className="w-full ">
                    <Navbar />
                </div>

                <div className="p-4 flex-1 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
