import React, { useState } from 'react'

export function FormInput({ isRequired, type = 'text', name, label, id, inputValue, onSetValue }) {
  const [value, setValue] = useState(inputValue)

  const handleChangeInput = (event) => {
    const inputValue = event.target.value
    setValue(inputValue)
    onSetValue(inputValue)
  }

  return (
    <div className="form-group">
      <input
        value={value}
        type={type}
        name={name}
        id={id}
        className={`form-control ${value.length > 0 ? 'has-value' : ''}`}
        required={isRequired}
        onChange={handleChangeInput}
      />
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
    </div>
  )
}
