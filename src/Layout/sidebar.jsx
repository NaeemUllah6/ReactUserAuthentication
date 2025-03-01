import Navbar from "./Navbar";
import {FaBars,FaTimes} from 'react-icons/fa'
import { Link,useLocation } from "react-router-dom";
import { HomeIcon, UserIcon, Cog6ToothIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [offcanvas, setOffcanvasopne] = useState(false)
    const location = useLocation()
    const offcanvasopen = () => {
        setOffcanvasopne(prevState => !prevState)
    }
    
    return (
        <>
            <button className='block lg:hidden fixed start-5 top-7 z-50 text-white' onClick={offcanvasopen}>
            {offcanvas?<FaTimes className="top-[10px] left-[10px] fixed"/> :< FaBars />}
            </button>
       <div className={`absolute top-0 z-30 ${offcanvas? 'block' : 'hidden lg:block'}`}>
         <div className="bg-gray-900 text-white h-screen p-4 w-[200px] transition-all">
            <h2 className="font-bold text-2xl px-4">JimmyChoo</h2>
            <ul className="mt-3 space-y-2 ">
                <li className={`p-2  rounded ${location.pathname === '/'? 'bg-red-600 text-white' :'hover:bg-red-600'}`}>
                    <Link to="/" className="flex items-center">
                        <HomeIcon className="w-5 h-5 mr-2" />
                        {isOpen && "Dashboard"}
                    </Link>
                </li>
                <li className={`p-2  rounded ${location.pathname === '/profile'? 'bg-red-600 text-white' :'hover:bg-red-600'}`}>
                    <Link to="/profile" className="flex items-center">
                        <UserIcon className="w-5 h-5 mr-2" />
                        {isOpen && "Profile"}
                    </Link>
                </li>
                <li className={`p-2  rounded ${location.pathname === '/settings'? 'bg-red-600 text-white' :'hover:bg-red-600'}`}>
                    <Link to="/settings" className="flex items-center">
                        <Cog6ToothIcon className="w-5 h-5 mr-2 text-white" />
                        {isOpen && "Settings"}
                    </Link>
                </li>
            </ul>
        </div>
       </div>
        </>
    );
};

export default Sidebar;
