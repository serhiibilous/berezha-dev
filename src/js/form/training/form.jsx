import React, { useState, useEffect } from 'react'
import { FormUserData } from '../components/form-user-data'
import { useFetch } from '../components/use-fetch'
import { INTEGROMAT_API_KEY } from '../constants'
import { validateForm } from '../components/validate-form'
import { Loader } from '../components/loader'
import { Success } from '../components/success'
import { Error } from '../components/error'

export function TrainingForm() {
  const [userFirstName, setUserFirstName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userComment, setUserComment] = useState('')
  const [agreement, setAgreement] = useState('')
  const [validationErrors, setValidationErrors] = useState([])
  const [shouldValidate, setShouldValidate] = useState(false)

  const [fullPayment, setFullPayment] = useState(true)
  const [fullPaymentSale, setFullPaymentSale] = useState(false)
  const [isStudent, setIsStudent] = useState(false)
  const [militaryVeteranSale, setMilitaryVeteranSale] = useState(false)

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
      price: fullPayment ? '24000' : '12000',
      program_type: fullPayment ? 'Full program' : 'Module 1 Only',
      fullPaymentSale,
      isStudent,
      militaryVeteranSale,
      pageUrl: window.location.href,
      formName: 'PentesterTraining',
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
    <section className="training-price">
      <div className="container">
        <form onSubmit={handleSubmitForm} className="training-price__container">
          <div className="training-price__left training-price__left_security">
            <h2 className="training-price__title heading-h2">Training Price</h2>
            <>
              <div className="training-price__radio">
                <div className="training-price__checkbox body-text-1">
                  <input
                    type="checkbox"
                    id="fullProgramPrice"
                    name="fullProgramPrice"
                    checked={!fullPayment}
                    onChange={() => setFullPayment(!fullPayment)}
                  />
                  <label htmlFor="fullProgramPrice">
                    <span className="training-price__checkbox-value">
                      <span>Full Program</span>
                    </span>
                    <span className="training-price__checkbox-value">
                      <span>Module 1 Only</span>
                    </span>
                  </label>
                </div>
              </div>
              <div className="training-price-content">
                <p className="heading-h2 training-price-content__title">{fullPayment ? '24 000' : '12 000'} UAH</p>
                <p className="caption"> * VAT included</p>
              </div>
              <p className="body-text-2 training-price__list-title">Discounts</p>
              <ul className="training-price__list">
                <li className="form-check__container body-text-2">
                  <input
                    type="checkbox"
                    id="fullPaymentSale"
                    name="fullPaymentSale"
                    className="form-check-input"
                    checked={fullPaymentSale}
                    onChange={() => setFullPaymentSale(!fullPaymentSale)}
                  />
                  <label htmlFor="fullPaymentSale" className="form-check-label">
                    I am going to pay in-full advance payment (-2000 UAH)
                  </label>
                </li>
                <li className="form-check__container body-text-2">
                  <input
                    type="checkbox"
                    id="isStudent"
                    name="isStudent"
                    checked={isStudent}
                    onChange={() => setIsStudent(!isStudent)}
                    className="form-check-input"
                  />
                  <label htmlFor="isStudent" className="form-check-label">
                    I am Ukrainian daytime student (-25%)
                  </label>
                </li>
                <li className="form-check__container body-text-2">
                  <input
                    type="checkbox"
                    id="militaryVeteranSale"
                    name="militaryVeteranSale"
                    className="form-check-input"
                    checked={militaryVeteranSale}
                    onChange={() => setMilitaryVeteranSale(!militaryVeteranSale)}
                  />
                  <label htmlFor="militaryVeteranSale" className="form-check-label">
                    I am military veteran (-40%)
                  </label>
                </li>
              </ul>
            </>
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
