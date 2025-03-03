import { useState } from "react";

const Reports = () => {
  const [filter, setFilter] = useState("monthly");

  const reportsData = [
    { id: 1, title: "Monthly Sales Report", date: "Feb 2025", status: "Completed" },
    { id: 2, title: "User Growth Analysis", date: "Jan 2025", status: "In Progress" },
    { id: 3, title: "Revenue Summary", date: "Dec 2024", status: "Completed" },
    { id: 4, title: "Performance Metrics", date: "Nov 2024", status: "Completed" },
  ];

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Reports</h2>

      {/* Report Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-blue-600 rounded-lg text-center">
          <h3 className="text-white text-lg font-medium">Users</h3>
          <p className="text-xl text-white font-semibold">12,540</p>
        </div>
        <div className="p-4 bg-green-600 rounded-lg text-center">
          <h3 className="text-white text-lg font-medium">Revenue</h3>
          <p className="text-xl text-white font-semibold">$78,200</p>
        </div>
        <div className="p-4 bg-yellow-600 rounded-lg text-center">
          <h3 className="text-white text-lg font-medium">Issues Reported</h3>
          <p className="text-xl text-white font-semibold">34</p>
        </div>
        <div className="p-4 bg-red-600 rounded-lg text-center">
          <h3 className="text-white text-lg font-medium">Performance</h3>
          <p className="text-xl text-white font-semibold">92%</p>
        </div>
      </div>

      {/* Filter Reports */}
      <div className="mb-4 flex flex-wrap gap-4 justify-between items-center">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="monthly">Monthly Reports</option>
          <option value="quarterly">Quarterly Reports</option>
          <option value="yearly">Yearly Reports</option>
        </select>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Download Report
        </button>
      </div>

      {/* Report Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3">Title</th>
              <th className="border p-3">Date</th>
              <th className="border p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {reportsData.map((report) => (
              <tr key={report.id} className="border">
                <td className="p-3 border">{report.title}</td>
                <td className="p-3 border">{report.date}</td>
                <td className="p-3 border">
                  <span className={`px-2 py-1 rounded-full text-sm ${report.status === "Completed" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"}`}>
                    {report.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
