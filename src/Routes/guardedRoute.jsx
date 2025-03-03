import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import Settings from "../Pages/Settings";
import Analytics from '../Pages/analytics'
import Reports from '../Pages/reports'
import Users from '../Pages/users'
import Projects from '../Pages/projects'
import Billing from '../Pages/billing'
import Inbox from '../Pages/inbox'
import Document from "../Pages/document";
import HigherOrderComponent from '../HOC/Authentication'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HigherOrderComponent />}>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/users" element={<Users />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/document" element={<Document />} />
        </Route>
      </Route>
    </Routes>

  );
};

export default AppRoutes;
