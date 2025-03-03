import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { 
  HomeIcon, 
  UserIcon, 
  Cog6ToothIcon, 
  ChartBarIcon, 
  ClipboardDocumentListIcon, 
  BriefcaseIcon, 
  UsersIcon, 
  CurrencyDollarIcon, 
  InboxIcon, 
  DocumentTextIcon 
} from "@heroicons/react/24/outline";
import { useState } from "react";

const menuItems = [
  { name: "Dashboard", path: "/", icon: <HomeIcon className="w-5 h-5 mr-2" /> },
  { name: "Settings", path: "/settings", icon: <Cog6ToothIcon className="w-5 h-5 mr-2" /> },
  { name: "Analytics", path: "/analytics", icon: <ChartBarIcon className="w-5 h-5 mr-2" /> },
  { name: "Reports", path: "/reports", icon: <ClipboardDocumentListIcon className="w-5 h-5 mr-2" /> }, 
  { name: "Projects", path: "/projects", icon: <BriefcaseIcon className="w-5 h-5 mr-2" /> },
  { name: "Users", path: "/users", icon: <UsersIcon className="w-5 h-5 mr-2" /> },
  { name: "Billing", path: "/billing", icon: <CurrencyDollarIcon className="w-5 h-5 mr-2" /> },
  { name: "Inbox", path: "/inbox", icon: <InboxIcon className="w-5 h-5 mr-2" /> },
  { name: "Profile", path: "/profile", icon: <UserIcon className="w-5 h-5 mr-2" /> },
  { name: "People", path: "/people", icon: <UserIcon className="w-5 h-5 mr-2" /> },

  // { name: "Documents", path: "/documents", icon: <DocumentTextIcon className="w-5 h-5 mr-2" /> },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [offcanvas, setOffcanvasOpen] = useState(false);
  const location = useLocation();

  const toggleOffcanvas = () => {
    setOffcanvasOpen((prev) => !prev);
  };

  return (
    <>
      <button
        className={`block md:hidden fixed z-50 text-white ${offcanvas ? "translate-x-42 translate-y-7" : "left-5 top-7"}`}
        onClick={toggleOffcanvas}
      >
        {offcanvas ? <FaTimes /> : <FaBars />}
      </button>

      <div
        className={`fixed top-0 left-0 h-screen overflow-auto w-[200px] bg-gray-900 text-white p-4 transition-transform duration-300 ease-in-out z-30 
        ${offcanvas ? "translate-x-0" : "translate-x-[-100%] md:translate-x-0"}`}
      >
        <h2 className="font-bold text-2xl px-4">JimmyChoo</h2>
        <ul className="mt-10 space-y-2">
          {menuItems.map((item, index) => (
            <li key={index} className={`p-2 rounded ${location.pathname === item.path ? "bg-red-600 text-white" : "hover:bg-red-600"}`}>
              <Link to={item.path} onClick={()=>toggleOffcanvas(false)} className="flex items-center">
                {item.icon}
                {isOpen && item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
