import React from 'react'

export function FormTermsConditions() {
  return (
    <div className="form-check__container caption">
      <input type="checkbox" name="agreement" className="form-check-input" id="agreement" required />
      <label className="form-check-label caption" htmlFor="agreement">
        <span>
          I have read and agree to the{' '}
          <a href="#" target="_blank">
            Terms&Conditions
          </a>{' '}
          and{' '}
          <a href="#" target="_blank">
            Privacy Policy
          </a>
          .
        </span>
      </label>
    </div>
  )
}
