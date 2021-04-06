import React from 'react'

export function FormTermsConditions() {
  return (
    <>
      <input type="checkbox" name="agreement" className="form-check-input" id="agreement" required />
      <label className="form-check-label caption" htmlFor="agreement">
        I have read and agree to the{' '}
        <a href="#" target="_blank">
          Terms&Conditions
        </a>{' '}
        and{' '}
        <a href="#" target="_blank">
          Privacy Policy
        </a>
        .
      </label>
    </>
  )
}
