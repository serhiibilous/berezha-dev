import React, { useEffect, useState } from 'react'

export function Step({ step, left, right, onChangeStep, service, currentStep, className }) {
  const [isStepVisible, setIsStepVisible] = useState(true)
  const handleChangeStep = (event) => {
    event.preventDefault()
    onChangeStep(step - 1)
  }

  useEffect(() => {
    if (step !== currentStep) {
      setTimeout(() => {
        setIsStepVisible(false)
      }, 700)
    } else {
      setIsStepVisible(true)
    }
  }, [step])

  if (!isStepVisible) {
    return <div className="precise-quote__step" />
  }

  return (
    <div className="precise-quote__step">
      <div className={`row ${className}`}>
        <div className="col-lg-5 offset-lg-1">
          <div className="precise-quote__contact-us_left">{left}</div>
        </div>
        <div className="col-lg-6">
          <div className="precise-quote__contact-us_right">
            <div className="width-100">{right}</div>
          </div>
        </div>
      </div>
      {step && (
        <div className="precise-quote__counter body-text-1">
          {step !== 1 && (
            <a href="#" onClick={handleChangeStep} className="precise-quote__back-button">
              <i className="icon-arrow" /> Back
            </a>
          )}
          {step !== 4 && <div>Question {step}/3</div>}
        </div>
      )}
    </div>
  )
}
