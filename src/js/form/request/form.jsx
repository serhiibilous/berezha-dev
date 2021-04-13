import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { FormUserData } from '../components/form-user-data'
import { Step } from '../questionnaire/step'

export function RequestForm() {
  // User Data
  const [userFirstName, setUserFirstName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userComment, setUserComment] = useState('')

  const handleSubmitForm = (event) => {
    event.preventDefault()
    const data = {
      userFirstName,
      userLastName,
      userEmail,
      userComment,
    }
    console.table(data)
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmitForm}>
        <section className="precise-quote precise-quote_form">
          <Step
            left={
              <>
                <h2 className="heading-h2 precise-quote__heading">Any questions left unanswered?</h2>
                <p className="body-text-1">
                  Please send us a message, and our security expert will get back to you shortly.
                </p>
              </>
            }
            right={
              <FormUserData
                onChangeUserFirstName={setUserFirstName}
                onChangeUserLastName={setUserLastName}
                onChangeUserEmail={setUserEmail}
                onChangeUserComment={setUserComment}
              />
            }
          />
        </section>
      </form>
    </div>
  )
}
