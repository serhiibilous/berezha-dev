import React, { useEffect, useState } from 'react'
import { FormUserData } from '../components/form-user-data'
import { Success } from '../components/success'
import { Error } from '../components/error'
import { Loader } from '../components/loader'
import { useFetch } from '../components/use-fetch'
import { validateForm } from '../components/validate-form'
import { CONTACT_US_ENDPOINT } from '../constants'

export function RequestForm() {
  // User Data
  const [userFirstName, setUserFirstName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userComment, setUserComment] = useState('')
  const [agreement, setAgreement] = useState('')
  const [validationErrors, setValidationErrors] = useState([])
  const [shouldValidate, setShouldValidate] = useState(false)

  const validationFields = [
    { type: 'text', name: 'FirstName', value: userFirstName },
    { type: 'email', name: 'Email', value: userEmail },
    { type: 'checkbox', name: 'agreement', value: agreement },
  ]

  const [success, error, isLoading, fetchData] = useFetch({ url: `https://hook.integromat.com/${CONTACT_US_ENDPOINT}` })

  const handleSubmitForm = (event) => {
    event.preventDefault()

    const errors = validateForm(validationFields)
    setValidationErrors(errors)
    setShouldValidate(true)

    const data = {
      first_name: userFirstName,
      last_name: userLastName,
      email: userEmail,
      phone: userPhone,
      message: userComment,
      pageUrl: window.location.href,
      formName: 'ContactUs',
    }

    if (errors.length === 0) {
      fetchData(data)
    }
  }

  useEffect(() => {
    if (shouldValidate) {
      const errors = validateForm(validationFields)
      setValidationErrors(errors)
    }
  }, [userFirstName, userEmail, agreement])

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
                    onChangeAgreement={setAgreement}
                    errors={validationErrors}
                  />
                </div>
              </div>
            </div>
          </div>
          {isLoading && <Loader />}
          {success && <Success />}
          {error && <Error />}
        </section>
      </form>
    </div>
  )
}
