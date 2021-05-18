import React, { useState, useEffect, useCallback } from 'react'

export function FormTermsConditions({ onSetValue, errors = [] }) {
  const [error, setError] = useState()
  const id = Math.floor(Math.random() * 1000)

  const handleChangeInput = useCallback(
    (event) => {
      const inputValue = event.target.checked
      onSetValue(inputValue)
    },
    [onSetValue]
  )

  useEffect(() => {
    const currentError = errors.find((item) => item.key === 'agreement')
    if (currentError) {
      setError(currentError.name)
    } else {
      setError()
    }
  }, [errors])

  return (
    <div className="form-check__container caption">
      <input
        type="checkbox"
        name="agreementField"
        className="form-check-input"
        id={`agreementField_${id}`}
        onChange={handleChangeInput}
      />
      <label className="form-check-label caption" htmlFor={`agreementField_${id}`}>
        <span>
          I have read and agree to the <br />
          <a href="/terms-and-conditions/" target="_blank">
            Terms&Conditions
          </a>{' '}
          and{' '}
          <a href="/privacy-policy-bsg/" target="_blank">
            Privacy Policy
          </a>
          .
        </span>
      </label>
      {error && <div className="precise-quote__error caption">{error}</div>}
    </div>
  )
}
