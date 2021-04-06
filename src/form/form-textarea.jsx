import React, { useState } from 'react'

export function FormTextarea({ name, label, id, inputValue, onSetValue }) {
  const [value, setValue] = useState(inputValue)

  const handleChangeTextArea = (event) => {
    const inputValue = event.target.value
    setValue(inputValue)
    onSetValue(inputValue)
  }

  return (
    <div className="form-group">
      <textarea
        value={value}
        name={name}
        id={id}
        className={`form-control ${value.length > 0 ? 'has-value' : ''}`}
        onChange={handleChangeTextArea}>
        {value}
      </textarea>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
    </div>
  )
}
