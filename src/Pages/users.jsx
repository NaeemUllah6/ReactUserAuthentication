const Users = () => {
  const users = [
    { id: 1, name: "John Doe", role: "Admin" },
    { id: 2, name: "Jane Smith", role: "Editor" },
    { id: 3, name: "Sam Wilson", role: "User" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Users</h1>
      <ul className="mt-4">
        {users.map((user) => (
          <li key={user.id} className="p-2 border-b">
            {user.name} - <span className="font-semibold">{user.role}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
