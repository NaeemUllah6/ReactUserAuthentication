import { useState } from "react";

const generateProjects = () => {
  const statuses = ["Ongoing", "Completed", "Pending"];
  const projects = [];

  for (let i = 1; i <= 200; i++) {
    projects.push({
      id: i,
      name: `Project ${i}`,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      deadline: `April ${Math.floor(Math.random() * 30) + 1}, 2025`,
    });
  }
  return projects;
};

const Projects = () => {
  const [projects] = useState(generateProjects());
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;

  // Filter projects based on search input
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="mt-2">Manage all your projects here.</p>

      {/* Search and Add Project */}
      <div className="flex justify-between items-center mt-4">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-1/2"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded">+ Add Project</button>
      </div>

      {/* Project List */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Project List</h2>
        <table className="w-full mt-4 border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">Project Name</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Deadline</th>
            </tr>
          </thead>
          <tbody>
            {currentProjects.length > 0 ? (
              currentProjects.map((project) => (
                <tr key={project.id} className="border">
                  <td className="p-2">{project.name}</td>
                  <td
                    className={`p-2 font-semibold ${project.status === "Ongoing"
                        ? "text-blue-500"
                        : project.status === "Completed"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                  >
                    {project.status}
                  </td>
                  <td className="p-2">{project.deadline}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center p-4 text-gray-500">
                  No projects found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;
