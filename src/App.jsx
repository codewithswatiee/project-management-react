import React, { useState, useEffect } from "react";
import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from './components/NoProjectSelected.jsx';
import { v4 as uuidv4 } from 'uuid';
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  // Load initial state from localStorage or default to empty arrays
  const [projectsState, setProjectsState] = useState(() => {
    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return {
      selectedProjectId: undefined, // neither adding a new project nor have a project selected
      projects: savedProjects,
      tasks: savedTasks,
    };
  });

  // Update localStorage whenever projects or tasks change
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projectsState.projects));
    localStorage.setItem('tasks', JSON.stringify(projectsState.tasks));
  }, [projectsState.projects, projectsState.tasks]);

  function handleAddTask(text) {
    setProjectsState(prevState => {
      const taskId = uuidv4();
      const newTask = {
        text: text,
        id: taskId,
        projectId: prevState.selectedProjectId
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id)
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null, // adding a new project
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId = uuidv4();
      const newProject = {
        ...projectData,
        id: projectId
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id, // selecting an existing project
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined, // cancel adding a new project
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState(prevState => {
      const projectId = prevState.selectedProjectId;
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== projectId),
        tasks: prevState.tasks.filter(task => task.projectId !== projectId)
      };
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    content = <SelectedProject tasks={projectsState.tasks.filter(task => task.projectId === projectsState.selectedProjectId)} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} onDelete={handleDeleteProject} project={selectedProject} />;
  }

  return (
    <main className="h-screen flex gap-8">
      <ProjectsSidebar selectedProjectId={projectsState.selectedProjectId} onSelectProject={handleSelectProject} projects={projectsState.projects} onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
