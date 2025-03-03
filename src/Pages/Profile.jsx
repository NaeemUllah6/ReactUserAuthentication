const Profile = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Profile</h1>
      <p className="mt-2">Manage your account details and personal information.</p>

      {/* Profile Info */}
      <div className="mt-6 p-4 border rounded-lg">
        <h3 className="text-xl font-semibold">User Information</h3>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> johndoe@example.com</p>
        <p><strong>Role:</strong> Administrator</p>
      </div>

      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Edit Profile</button>
    </div>
  );
};

export default Profile;
