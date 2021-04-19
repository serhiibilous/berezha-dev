import React, { useEffect, useRef, useState } from 'react'

export function FormInput({ type = 'text', name, label, id, onSetValue, errors = [] }) {
  const [value, setValue] = useState('')
  const input = useRef(null)
  const [error, setError] = useState()

  const handleChangeInput = (event) => {
    const inputValue = event.target.value
    setValue(inputValue)
    onSetValue(inputValue)
  }

  const handleFocusInput = (event) => {
    event.preventDefault()
    input.current.focus()
  }

  useEffect(() => {
    const currentError = errors.find((item) => item.key === id)
    if (currentError) {
      setError(currentError.name)
    } else {
      setError()
    }
  }, [errors])

  return (
    <div className={`form-group ${error && 'form-group_error'}`}>
      <input
        ref={input}
        value={value}
        type={type}
        name={name}
        id={id}
        className={`form-control ${value.length > 0 ? 'has-value' : ''}`}
        onChange={handleChangeInput}
      />
      <label onClick={handleFocusInput} className="form-label" htmlFor={id}>
        {label}
      </label>
      {error && <div className="precise-quote__error caption">{error}</div>}
    </div>
  )
}
