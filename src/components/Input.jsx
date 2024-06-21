import React from 'react'
import { forwardRef } from 'react'



const Input = forwardRef(function Input({isTextarea, label, ...props}, ref) {
    const classes = 'w-full p-1 border-b-2 rounded-md border-stone-300 bg-stone-200 text-stone-600 focus:outline fouus:border-stone-600'
  return (
      <p className='flex flex-col gap-1 my-4 '>
        <label className='text-sm font-bold uppercase text-stone-500'>{label}</label>
        {isTextarea ? <textarea ref={ref} className={classes} {...props} ></textarea> : <input ref={ref} className={classes} {...props}></input> }
    </p>

  )
})

export default Input;
