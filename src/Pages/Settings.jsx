const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <p className="mt-2">Configure your account preferences and security settings.</p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Notification Settings</h3>
        <label className="block mt-2">
          <input type="checkbox" className="mr-2" /> Email Notifications
        </label>
        <label className="block mt-2">
          <input type="checkbox" className="mr-2" /> Push Notifications
        </label>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Change Password</h3>
        <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded">Reset Password</button>
      </div>
    </div>
  );
};

export default Settings;
