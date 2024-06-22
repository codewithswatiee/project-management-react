import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from './components/NoProjectSelected.jsx';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import SelectedProject from "./components/SelectedProject.jsx";


function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, //neither adding a new project nor have a project selected
    projects : [],
    tasks: [],
  })

  function handleAddTask(text){
    setProjectsState(prevState => {
      const taskId = uuidv4();
      const newTask = {
        text: text,
        id: taskId,
        projectId: prevState.selectedProjectId
      }
      return{
        ...prevState,
        tasks: [...newTask ,...prevState.tasks]
      }
    })
  }


  function handleDeleteTask(id){
    setProjectsState(prevState => {
  
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id
        ) 
      };
    });
  }


  function handleStartAddProject(){
    setProjectsState(prevState => {

      return {
        ...prevState,
        selectedProjectId : null, //adding a new project
      };
    });
  }


  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId = uuidv4();
      const newProject = {
        ...projectData, 
        id: projectId
      }
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects : [...prevState.projects, newProject]
      }
    })
  }


  function handleSelectProject(id){
    setProjectsState(prevState => {

      return {
        ...prevState,
        selectedProjectId : id, //adding a new project
      };
    });
  }


  function handleCancelAddProject() {
    setProjectsState(prevState => {

      return {
        ...prevState,
        selectedProjectId : undefined, //adding a new project
      };
    });
  }

  function handleDeleteProject(){
    setProjectsState(prevState => {
  
      return {
        ...prevState,
        selectedProjectId : undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId
        ) 
      };
    });
  }



  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);


  let content = <SelectedProject tasks={projectsState.tasks} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} onDelete={handleDeleteProject}  project={selectedProject}/>;
  
  if(projectsState.selectedProjectId ===null ){
    content = <NewProject onAdd={handleAddProject} onStartAddProject={handleStartAddProject} onCancel={handleCancelAddProject}></NewProject>
  }
  else if (projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}></NoProjectSelected>
  }
  
  
  return (
    <main className="h-screen flex gap-8">
      <ProjectsSidebar selectedProjectId={projectsState.selectedProjectId}
       onSelectProject={handleSelectProject} projects={projectsState.projects} onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
