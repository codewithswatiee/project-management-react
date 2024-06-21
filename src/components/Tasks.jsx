import React from 'react'
import NewTasks from './NewTasks'

function Tasks({tasks, onAdd, onDelete}) {
  return (
    <section >
        <h2 className='text-2l font-bold text-stone-700 mb-4'>Tasks</h2>
        <NewTasks onAdd={onAdd}></NewTasks>
        { tasks.length === 0 && <p className='text-stone-800 my-4'>This project doesn't have any tasks yet.</p>}
        {tasks.length > 0 && 
        <ul className='p-4 mt-8 rounded-md bg-stone-100'>
            {tasks.map((task) => <li key={task.id} className='flex justify-between my-4'>
                <span>{task.text}</span>
                <button onClick={() => onDelete(task.id)} className='px-4 py-2 text-xs md:text-base bg-[#b5a78f] text-black hover:bg-stone-600 hover:text-red-400 rounded-lg'>Clear</button>
            </li>)}
        </ul>}
        
    </section>
  )
}

export default Tasks
