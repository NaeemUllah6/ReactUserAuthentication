import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex h-screen">

            <div className="lg:w-[200px]">
                <Sidebar />
            </div>

            <div className="flex flex-col flex-1 w-full lg:w-[calc(100%-200px]">

                <div className="w-full bg-white shadow">
                    <Navbar />
                </div>

                <div className="p-4 bg-gray-100 flex-1 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
