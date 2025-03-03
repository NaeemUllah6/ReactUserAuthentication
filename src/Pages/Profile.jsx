import { useState } from "react";
import profileImagePlaceholder from '../assets/images/profile.jpg';
import EditIcon from '../assets/images/pencilwrite.svg';

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Full Stack Developer at XYZ Company",
    location: "New York, USA",
    phone: "+1 234 567 890",
    profileImage: "https://via.placeholder.com/150",
    newPassword: "",
    confirmPassword: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [previewImage, setPreviewImage] = useState(user.profileImage);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    setUser({ ...user, profileImage: previewImage });
    alert("Profile updated successfully!");
  };

  return (
    <div className="mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-5">Profile</h2>

      {/* Profile Image */}
      <div className="flex items-center space-x-4">
        <img
          src={previewImage}
          alt="Profile"
          className="w-24 h-24 rounded-full border"
        />
        {isEditing && (
          <>
            <input type="file" className="hidden" id="profileUpload" onChange={handleImageUpload} />
            <label htmlFor="profileUpload" className="rounded cursor-pointer flex items-center px-2 py-1 border border-red-600 text-red-600  hover:bg-red-600 hover:text-white">
              Edit Profile Picture
            </label>
          </>
        )}
      </div>

      {/* Profile Details */}
      <div className="mt-6 space-y-4">
        {["name", "email", "bio", "location", "phone"].map((field) => (
          <div key={field}>
            <label className="block font-medium capitalize">{field}</label>
            {field === "bio" ? (
              <textarea
                name={field}
                value={user[field]}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
                disabled={!isEditing}
              />
            ) : (
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={user[field]}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
                disabled={!isEditing}
              />
            )}
          </div>
        ))}
      </div>

      {/* Change Password */}
      {isEditing && (
        <div className="mt-6">
          <h3 className="text-lg font-medium">Change Password</h3>
          <div className="mt-2">
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              className="w-full p-2 border rounded mt-1"
              onChange={handleChange}
            />
          </div>
          <div className="mt-2">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full p-2 border rounded mt-1"
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-end mt-6 space-x-4">
        {isEditing ? (
          <>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded"
              onClick={handleSave}
            >
              Save Changes
            </button>
          </>
        ) : (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
