import React from 'react'
import { useState, useRef} from 'react';
import Modal from './Modal';

function NewTasks({onAdd}) {
    const modal = useRef();
    const [enteredTask, setEnteredTask] = useState('');
    function handleChange(e){
        setEnteredTask(e.target.value)
    }

    function handleClick() {
      if(enteredTask.trim() === ''){
        modal.current.open();
        return;
      }
      onAdd(enteredTask)
      setEnteredTask('');
        
    }
  return (
    <>
      <Modal ref={modal} btnCaption='Close'>
          <h2 className='text-xl font-bold text-stone-500 my-4'>No Task Entered!</h2>
      </Modal>
        <div className='flex items-center gap-4'>
          <input type='text' className='w-[64] px-2 py-1 rounded-sm bg-stone-200' 
          onChange={handleChange}
          value={enteredTask}></input>
          <button onClick={handleClick} className='px-4 py-2 text-xs md:text-base bg-[#b5a78f] text-black hover:bg-stone-600 hover:text-stone-100 rounded-lg'>Add Tasks</button>
      </div>
    </>
    
  )
}

export default NewTasks
