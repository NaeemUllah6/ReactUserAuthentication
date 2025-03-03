import { useState } from "react";
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { FiMenu, FiHome, FiBarChart2, FiPieChart } from "react-icons/fi";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const lineData = [
    { name: "Jan", users: 30 },
    { name: "Feb", users: 60 },
    { name: "Mar", users: 100 },
    { name: "Apr", users: 150 },
    { name: "May", users: 200 },
  ];

  const pieData = [
    { name: "Active", value: 60 },
    { name: "Inactive", value: 30 },
    { name: "Banned", value: 10 },
  ];

  const COLORS = ["#4CAF50", "#FF9800", "#F44336"];

  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      {/* <div className={`fixed inset-y-0 left-0 z-50 transform bg-gray-900 text-white p-5 transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0`}>
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul>
          <li className="mb-4 flex items-center space-x-2 cursor-pointer">
            <FiHome />
            <span>Dashboard</span>
          </li>
          <li className="mb-4 flex items-center space-x-2 cursor-pointer">
            <FiBarChart2 />
            <span>Reports</span>
          </li>
          <li className="mb-4 flex items-center space-x-2 cursor-pointer">
            <FiPieChart />
            <span>Analytics</span>
          </li>
        </ul>
      </div> */}

      <div className="flex-1">
        <div className="flex justify-between items-center">
          {/* <button className="lg:hidden p-2 bg-gray-900 text-white rounded-md" onClick={toggleSidebar}>
            <FiMenu size={24} />
          </button> */}
          {/* <h1 className="text-2xl font-bold">Dashboard</h1> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-500 text-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg">Total Users</h3>
            <p className="text-2xl font-bold">1,250</p>
          </div>
          <div className="bg-green-500 text-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg">Active Users</h3>
            <p className="text-2xl font-bold">980</p>
          </div>
          <div className="bg-orange-500 text-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg">New Signups</h3>
            <p className="text-2xl font-bold">320</p>
          </div>
          <div className="bg-red-500 text-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg">Pending Approvals</h3>
            <p className="text-2xl font-bold">45</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">User Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#4F46E5" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">User Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
