import { useState } from "react";

const Settings = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "",
    notifications: true,
    darkMode: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({
      ...user,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    alert("Settings Saved Successfully!");
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      alert("Account Deleted");
    }
  };

  return (
    <div className=" mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>

      {/* Profile Settings */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Profile Settings</h3>
        <div className="space-y-3">
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-2 border rounded-md"
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border rounded-md"
          />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="New Password"
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>

      {/* Notification Settings */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Notification Settings</h3>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="notifications"
            checked={user.notifications}
            onChange={handleChange}
            className="mr-2"
          />
          Enable Email & Push Notifications
        </label>
      </div>

      {/* Theme Settings */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Theme Settings</h3>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="darkMode"
            checked={user.darkMode}
            onChange={handleChange}
            className="mr-2"
          />
          Enable Dark Mode
        </label>
      </div>

      {/* Account Actions */}
      <div className="flex justify-between items-center">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Save Changes
        </button>
        <button
          onClick={handleDeleteAccount}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
