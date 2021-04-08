import React, { useRef, useState } from 'react'

export function FormTextarea({ name, label, id, onSetValue }) {
  const [value, setValue] = useState('')
  const input = useRef(null)

  const handleChangeTextArea = (event) => {
    const inputValue = event.target.value
    setValue(inputValue)
    onSetValue(inputValue)
  }

  const handleFocusInput = (event) => {
    event.preventDefault()
    input.current.focus()
  }

  return (
    <div className="form-group">
      <textarea
        ref={input}
        value={value}
        name={name}
        id={id}
        className={`form-control ${value.length > 0 ? 'has-value' : ''}`}
        onChange={handleChangeTextArea}>
        {value}
      </textarea>
      <label className="form-label" htmlFor={id} onClick={handleFocusInput}>
        {label}
      </label>
    </div>
  )
}
