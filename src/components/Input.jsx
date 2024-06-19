import React from 'react'

function Input({isTextarea, label, ...props}) {
  return (
      <p>
        <label>{label}</label>
        {isTextarea ? <textarea {...props} ></textarea> : <input {...props}></input> }
    </p>

  )
}

export default Input
