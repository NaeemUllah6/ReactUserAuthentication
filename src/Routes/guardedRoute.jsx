import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import Settings from "../Pages/Settings";
import HigherOrderComponent from "../HOC/Authentication";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import IfAuthenticated from './IfAuthenticated'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element = {<IfAuthenticated/>}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        </Route>
      

        {/* Private Routes */}
        <Route element={<HigherOrderComponent />}>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
