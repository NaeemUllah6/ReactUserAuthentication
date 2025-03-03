import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
    const location = useLocation()
    const [headerheading, setHeaderheading] = useState('Dashboard')
    const navigate = useNavigate();
    const Logout= () => {
        localStorage.removeItem ('dummyToken')
        navigate('/login')
    }
useEffect(()=>{
    const routeNames = 
    {
        "/" : 'Dashborad',
        "/profile" : 'Profile',
        "/settings" : 'Settings',
        "/analytics" : 'Analytics',
        "/reports" : 'Reports',
        "/projects" : 'Projects',
        "/users" : 'Users',
        "/billing" : 'Billing',
        "/inbox" : 'Inbox',
        "/documents" : 'Documents',

    }
    setHeaderheading (routeNames[location.pathname] || "Dashboard");
},[location.pathname])
  
  
    return (
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold ps-10 md:ps-0">{headerheading}</h1>
        </div>
        <button onClick={Logout} className="border-red-500 border hover:bg-red-500 px-4 py-2 rounded cursor-pointer">Logout</button>
      </div>
    );
  };
  
  export default Navbar;
  