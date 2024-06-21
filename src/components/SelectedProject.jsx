import React from 'react'
import Button from './Button'
import Tasks from './Tasks'


function SelectedProject({project, onDelete, onAddTask,tasks,  onDeleteTask}) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })

  return (
    <div className='w-[35rem] mt-16'>
      <header className='pb-4 mb-4 border-b-2 border-stone-300'>
        <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-bold text-stone-600 mb-2'>{project.title}</h1>
            <button onClick={onDelete} className='px-4 py-2 text-xs md:text-base bg-[#b5a78f] text-black hover:bg-stone-600 hover:text-stone-100 rounded-lg'>Delete</button>
        </div>
        <p className='mb-4 text-stone-400 '> Due: {formattedDate}</p>
        <p className='text-stone-600 whitespace-pre-wrap'>{project.description}</p>
      </header>
      <Tasks tasks={tasks} onDelete={onDeleteTask} onAdd={onAddTask}/>
    </div>
  )
}

export default SelectedProject
