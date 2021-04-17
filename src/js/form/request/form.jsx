import React, { useState } from 'react'
import { FormUserData } from '../components/form-user-data'

export function RequestForm() {
  // User Data
  const [userFirstName, setUserFirstName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userComment, setUserComment] = useState('')

  const handleSubmitForm = (event) => {
    event.preventDefault()
    const data = {
      first_name: userFirstName,
      last_name: userLastName,
      email: userEmail,
      phone: userPhone,
      message: userComment,
    }
    console.table(JSON.stringify(data))
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmitForm}>
        <section className="precise-quote precise-quote_form">
          <div className="precise-quote__step precise-quote__step_only-form">
            <div className="row">
              <div className="col-lg-5 offset-lg-1">
                <div className="precise-quote__contact-us_left">
                  <h2 className="heading-h2 precise-quote__heading">Contact Us</h2>
                  <p className="body-text-1">
                    Get cybersecurity advice now – <br /> talk to a BSG expert.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="precise-quote__contact-us_right">
                  <FormUserData
                    onChangeUserFirstName={setUserFirstName}
                    onChangeUserLastName={setUserLastName}
                    onChangeUserEmail={setUserEmail}
                    onChangeUserComment={setUserComment}
                    onChangeUserPhone={setUserPhone}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  )
}
