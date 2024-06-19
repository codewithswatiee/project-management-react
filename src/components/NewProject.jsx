import React from 'react';
import Input from './Input';

function NewProject() {
  return (
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center'>
        <li><button>Cancel</button></li>
        <li><button>Save</button></li>
      </menu>
      <div>
        <Input label='Title'></Input>
        <Input label='Description' isTextarea></Input>
        <Input label='Due Date'></Input>
      </div>
    </div>
  )
}

export default NewProject
