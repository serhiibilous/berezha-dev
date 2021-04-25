import React, { useState, useEffect } from 'react'

export function FormTermsConditions({ onSetValue, errors = [] }) {
  const [error, setError] = useState()

  const handleChangeInput = (event) => {
    const inputValue = event.target.checked
    onSetValue(inputValue)
  }

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
        id="agreementField"
        onChange={handleChangeInput}
      />
      <label className="form-check-label caption" htmlFor="agreementField">
        <span>
          I have read and agree to the <br />
          <a href="/terms-and-conditions.html" target="_blank">
            Terms&Conditions
          </a>{' '}
          and{' '}
          <a href="/privacy-policy-bsg.html" target="_blank">
            Privacy Policy
          </a>
          .
        </span>
      </label>
      {error && <div className="precise-quote__error caption">{error}</div>}
    </div>
  )
}
