import React from 'react'
// import { useState } from 'react'
import Button from './Button';


function ProjectsSidebar({onStartAddProject, projects , onSelectProject, selectedProjectId}) {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
        <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your projects</h2>
        <div>
          <Button onClick={onStartAddProject}>+ Add Project</Button>
        </div>
        <ul>
            {
              projects.map((project) => {
                let cssClasses = 'w-full text-left px-2 py-2 rounded-md my-3 hover:text-stone-200 hover:bg-stone-600';

                if (project.id === selectedProjectId){
                  cssClasses += " bg-stone-800 text-stone-200"
                } else{
                  cssClasses += ' text-stone-400'
                }

                return(
                  <li key={project.id}>
                <button onClick={() => onSelectProject(project.id)} className='w-full text-left px-2 py-2 rounded-md my-3 text-stone-400 hover:text-stone-200 hover:bg-stone-600'>{project.title}</button>
                </li>
              )
              })
            }
        </ul>
    </aside>
  )
}

export default ProjectsSidebar;
