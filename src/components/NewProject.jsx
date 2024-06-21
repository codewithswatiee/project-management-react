import React from 'react';
import Input from './Input';
import { useRef } from 'react';
import Modal from './Modal';

function NewProject({onAdd, onCancel}) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDuedate = dueDate.current.value;

    if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDuedate.trim() === '') {
      modal.current.open();
      return;
    }

    onAdd( {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDuedate
    })

  }
  return (
    <>
      <Modal ref={modal} btnCaption='Close'>
        <h2 className='text-xl font-bold text-stone-500 my-4'>Invalid Input</h2>
        <p className='text-stone-600 mb-4'>Oops...Looks like you forgot to enter a value</p>
        <p className='text-stone-600 mb-4'>Please Make sure you provide a valid valur for every input field.</p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-center gap-4 my-4'>
          <li><button className='text-stone-800 hover:text-stone-950' onClick={onCancel}>Cancel</button></li>
          <li><button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950' onClick={handleSave}>Save</button></li>
        </menu>
        <div>
          <Input type='text' ref={title} label='Title'></Input>
          <Input ref={description} label='Description' isTextarea></Input>
          <Input type='date' ref={dueDate} label='Due Date'></Input>
        </div>
      </div>
    </>
  )
}

export default NewProject
