import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const peopleData = [
  { id: 1, name: "John Doe", role: "Admin", email: "john@example.com", status: "Active", avatar: "https://i.pravatar.cc/40?img=1" },
  { id: 2, name: "Jane Smith", role: "User", email: "jane@example.com", status: "Inactive", avatar: "https://i.pravatar.cc/40?img=2" },
  { id: 3, name: "Robert Johnson", role: "Manager", email: "robert@example.com", status: "Active", avatar: "https://i.pravatar.cc/40?img=3" },
];

const PeopleDashboard = () => {
  const [people, setPeople] = useState(peopleData);

  return (
    <div className="">
      {/* Dashboard Header */}
      <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">People</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center hover:bg-blue-700 transition">
          <FaPlus className="mr-2" /> Add Person
        </button>
      </div>

      {/* People Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">Avatar</th>
              <th className="p-3">Name</th>
              <th className="p-3">Role</th>
              <th className="p-3">Email</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
              <tr key={person.id} className="border-t">
                <td className="p-3">
                  <img src={person.avatar} alt={person.name} className="w-10 h-10 rounded-full" />
                </td>
                <td className="p-3">{person.name}</td>
                <td className="p-3">{person.role}</td>
                <td className="p-3">{person.email}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-sm font-medium 
                    ${person.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                    {person.status}
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

export default PeopleDashboard;
