import React from 'react'

export function QuestionsList({ questions, service, step, onChangeStep, onSelectService }) {
  const handleChangeStep = (service) => {
    onSelectService(service)

    setTimeout(() => {
      onChangeStep(step + 1)
    }, 100)
  }

  return (
    <ul className="precise-quote__answers-container">
      {questions.map((question) => {
        return (
          <li>
            <input
              className="precise-quote__input_radio"
              type="radio"
              value={question.key}
              name={service}
              id={`${question.key}_${service}`}
              onChange={() => handleChangeStep(question.name)}
            />
            <label className="precise-quote__label_radio" htmlFor={`${question.key}_${service}`}>
              {question.name}
            </label>
          </li>
        )
      })}
    </ul>
  )
}
