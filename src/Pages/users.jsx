import { useState } from "react";
import { FaUserEdit, FaTrash } from "react-icons/fa";

const Users = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Inactive" },
    { id: 3, name: "Sam Wilson", email: "sam@example.com", role: "Viewer", status: "Active" },
    { id: 4, name: "Lisa Brown", email: "lisa@example.com", role: "Editor", status: "Pending" },
  ]);

  // Function to filter users based on search input
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  // Function to delete user
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search users..."
        className="w-full p-2 border rounded mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id} className="text-center">
                  <td className="border p-2">{user.name}</td>
                  <td className="border p-2">{user.email}</td>
                  <td className="border p-2">{user.role}</td>
                  <td className={`border p-2 ${user.status === "Active" ? "text-green-600" : user.status === "Pending" ? "text-yellow-600" : "text-red-600"}`}>
                    {user.status}
                  </td>
                  <td className="border p-4 flex justify-center space-x-4">
                    <button className="text-blue-600 hover:text-blue-800">
                      <FaUserEdit />
                    </button>
                    <button className="text-red-600 hover:text-red-800" onClick={() => deleteUser(user.id)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="border p-4 text-center text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
