import React, { useRef, useState } from 'react'

export function FormInput({ isRequired, type = 'text', name, label, id, onSetValue }) {
  const [value, setValue] = useState('')
  const input = useRef(null)

  const handleChangeInput = (event) => {
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
      <input
        ref={input}
        value={value}
        type={type}
        name={name}
        id={id}
        className={`form-control ${value.length > 0 ? 'has-value' : ''}`}
        required={isRequired}
        onChange={handleChangeInput}
      />
      <label onClick={handleFocusInput} className="form-label" htmlFor={id}>
        {label}
      </label>
    </div>
  )
}
