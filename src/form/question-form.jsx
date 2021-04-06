import React from 'react'
import ReactDOM from 'react-dom'
import { FormUserData } from './form-user-data'

export function QuestionForm() {
  return (
    <section className="precise-quote precise-quote_form">
      <div className="container">
        <div className="precise-quote__step">
          <div className="row">
            <div className="col-lg-6 offset-lg-1">
              <div className="precise-quote__question-content">
                <h2 className="heading-h2 precise-quote__heading">Any questions left unanswered?</h2>
                <p className="body-text-1">
                  Please send us a message, and our security expert will get back to you shortly.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <FormUserData />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ReactDOM.render(<QuestionForm />, document.getElementById('GetPrecizeQuote'))
