export default function Sidebar({ projects }) {
  return (
    <div className="bg-blue-300 absolute inset-y-0 left-0 w-21">
      <h2>YOUR PROJECTS</h2>
      <button>+ Add Project</button>
      <ul>
        {projects.map((project) => {
          return (
            <li>
              <button key={project.title}>{project.title}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
