import React, { useState, useEffect } from 'react'
import { FormUserData } from '../components/form-user-data'
import { useFetch } from '../components/use-fetch'
import { INTEGROMAT_API_KEY } from '../constants'
import { validateForm } from '../components/validate-form'
import { Loader } from '../components/loader'
import { Success } from '../components/success'
import { Error } from '../components/error'

export function ContactForm() {
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

  const [success, error, isLoading, fetchData] = useFetch({ url: `https://hook.integromat.com/${INTEGROMAT_API_KEY}` })

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
      console.table(JSON.stringify(data))
    }
  }

  useEffect(() => {
    if (shouldValidate) {
      const errors = validateForm(validationFields)
      setValidationErrors(errors)
    }
  }, [userFirstName, userEmail, agreement])

  return (
    <div className="contact__form">
      <form onSubmit={handleSubmitForm}>
        <FormUserData
          onChangeUserFirstName={setUserFirstName}
          onChangeUserLastName={setUserLastName}
          onChangeUserEmail={setUserEmail}
          onChangeUserComment={setUserComment}
          onChangeUserPhone={setUserPhone}
          onChangeAgreement={setAgreement}
          errors={validationErrors}
        />
        {isLoading && <Loader />}
        {success && <Success isShort />}
        {error && <Error isShort />}
      </form>
    </div>
  )
}
