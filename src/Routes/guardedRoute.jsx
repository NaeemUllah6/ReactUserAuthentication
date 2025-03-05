import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import HigherOrderComponent from "../HOC/Authentication";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import Settings from "../Pages/Settings";
import Analytics from "../Pages/analytics";
import Reports from "../Pages/reports";
import Users from "../Pages/users";
import Projects from "../Pages/projects";
import Billing from "../Pages/billing";
import Inbox from "../Pages/inbox";
import Document from "../Pages/document";
import People from "../Pages/People";
import MovieList from '../ReduxToolkit/movielist'
import InputMovie from '../ReduxToolkit/movieInput'

const routeConfig = [
  { path: "/", element: <Dashboard /> },
  { path: "/profile", element: <Profile /> },
  { path: "/settings", element: <Settings /> },
  { path: "/analytics", element: <Analytics /> },
  { path: "/reports", element: <Reports /> },
  { path: "/users", element: <Users /> },
  { path: "/projects", element: <Projects /> },
  { path: "/billing", element: <Billing /> },
  { path: "/inbox", element: <Inbox /> },
  { path: "/document", element: <Document /> },
  { path: "/people", element: <People /> },
  { path: "/movielist", element : <MovieList/>},
  { path: "/movieInput", element : <InputMovie/>}


];

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HigherOrderComponent />}>
        <Route path="/" element={<DashboardLayout />}>
          {routeConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
