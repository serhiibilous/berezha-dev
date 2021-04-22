import React, { useState, useEffect } from 'react'
import { FormUserData } from '../components/form-user-data'
import { useFetch } from '../components/use-fetch'
import { DEVELOPER_TRAINING_ENDPOINT } from '../constants'
import { validateForm } from '../components/validate-form'
import { Loader } from '../components/loader'
import { Success } from '../components/success'
import { Error } from '../components/error'

export function DeveloperTrainingForm() {
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

  const [success, error, isLoading, fetchData] = useFetch({
    url: `https://hook.integromat.com/${DEVELOPER_TRAINING_ENDPOINT}`,
  })

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
      price: '2400',
      currency: 'EUR',
      pageUrl: window.location.href,
      formName: 'DeveloperTraining',
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
    <section className="training-price">
      <div className="container">
        <form onSubmit={handleSubmitForm} className="training-price__container">
          <div className="training-price__left training-price__left_security">
            <h2 className="training-price__title heading-h2">Training Price</h2>
            <div className="training-price__security-content">
              <p className="sub-title training-price__list-title">for a group of 15-25 students</p>
              <div className="training-price-content">
                <p className="heading-h2 training-price-content__title">2,400 EUR</p>
                <p className="caption"> * VAT excluded</p>
              </div>
              <p className="body-text-2 training-price__list-title">Discounts</p>
              <p className="body-text-2">15% discount starting from the second group</p>
            </div>
          </div>
          <div className="training-price__right">
            <div className="training-price__form">
              <FormUserData
                onChangeUserFirstName={setUserFirstName}
                onChangeUserLastName={setUserLastName}
                onChangeUserEmail={setUserEmail}
                onChangeUserComment={setUserComment}
                onChangeUserPhone={setUserPhone}
                onChangeAgreement={setAgreement}
                errors={validationErrors}
                isTrainingForm
              />
            </div>
          </div>
          {isLoading && <Loader />}
          {success && <Success />}
          {error && <Error />}
        </form>
      </div>
    </section>
  )
}
