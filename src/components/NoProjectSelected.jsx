import React from 'react';
import Button from './Button';
import noProject from '../assets/no-projects.png';

function NoProjectSelected({onStartAddProject}) {
  return (
    <div className='mt-2 text-center w-2/3'>
      <img src={noProject} alt="Oops! Bo Project here" className='w-16 h-16 object-contain mx-auto'/>
      <h2 className='text-xl font-bold text-stone-500 my-4'>No project Selected</h2>
      <p className='text-stone-600 mb-4'>Select a project or get started with a new one</p>
      <p className='mt-8'>
        <Button onClick= {onStartAddProject}>Create new project</Button>
      </p>
    </div>
  )
}

export default NoProjectSelected;
