import { useState } from "react";
import NewProject from "./component/NewProject";
import NoProjectSelected from "./component/NoProjectSelected";
import Sidebar from "./component/Sidebar";
import SelectedProject from "./component/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function startAddProjectHandler() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }

  function addProjectHandler(project) {
    const newId = Math.random();

    const newProject = { ...project, number: newId };

    setProjectsState((prev) => {
      return {
        ...prev,
        projects: [...prev.projects, newProject],
        selectedProjectId: undefined,
      };
    });
  }

  function cancelHandler() {
    setProjectsState((prev) => {
      return { ...prev, selectedProjectId: undefined };
    });
  }

  function selectProjectHandler(number) {
    setProjectsState((prev) => {
      return { ...prev, selectedProjectId: number };
    });
  }

  function deleteProjectHandler(number) {
    setProjectsState((prev) => {
      return {
        ...prev,
        projects: prev.projects.filter(
          (project) => project.number != prev.selectedProjectId
        ),
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddTask(text) {
    setProjectsState((prev) => {
      const newId = Math.random();
      const newTask = {
        text: text,
        projectId: prev.selectedProjectId,
        id: newId,
      };

      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => task.id != id),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.number === projectsState.selectedProjectId
  );

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={startAddProjectHandler}
        onSelectProject={selectProjectHandler}
        projects={projectsState.projects}
        selectedProjectid={projectsState.selectedProjectId}
      />
      {projectsState.selectedProjectId !== null &&
        projectsState.selectedProjectId !== undefined && (
          <SelectedProject
            project={selectedProject}
            onDelete={deleteProjectHandler}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
            tasks={projectsState.tasks.filter(
              (task) => task.projectId === projectsState.selectedProjectId
            )}
          />
        )}
      {projectsState.selectedProjectId === null && (
        <NewProject onAdd={addProjectHandler} onCancel={cancelHandler} />
      )}
      {projectsState.selectedProjectId === undefined && (
        <NoProjectSelected onStartAddProject={startAddProjectHandler} />
      )}
    </main>
  );
}

export default App;
