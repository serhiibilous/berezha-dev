import React, { useState } from 'react'
import { FormInput } from '../components/form-input'
import { FormInputFile } from '../components/form-input-file'
import { FormTermsConditions } from '../components/form-terms-conditions'

export function TrainingForm() {
  const [userFirstName, setUserFirstName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userFile, setUserFile] = useState(null)
  const [fullPayment, setFullPayment] = useState(true)
  const [fullPaymentSale, setFullPaymentSale] = useState(false)
  const [isStudent, setIsStudent] = useState(false)
  const [militaryVeteranSale, setMilitaryVeteranSale] = useState(false)

  const handleSubmitForm = (event) => {
    event.preventDefault()
    const data = {
      userFirstName,
      userLastName,
      userEmail,
      userFile,
      fullPayment,
      fullPaymentSale,
      isStudent,
      militaryVeteranSale,
    }
    console.table(data)
  }

  return (
    <section className="training-price">
      <div className="container">
        <form onSubmit={handleSubmitForm} className="training-price__container">
          <div className="training-price__left">
            <h2 className="training-price__title heading-h2">Training Price</h2>
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
              <p className="heading-h2 training-price-content__title">24 000 UAH</p>
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
          </div>
          <div className="training-price__right">
            <div className="training-price__form">
              <div className="form-inline">
                <FormInput
                  id="FirstName"
                  name="FirstName"
                  isRequired={true}
                  label="First Name (required)"
                  onSetValue={setUserFirstName}
                />
                <FormInput
                  id="LastName"
                  name="LastName"
                  isRequired={false}
                  label="Last Name (optional)"
                  onSetValue={setUserLastName}
                />
              </div>
              <FormInput
                id="Email"
                name="Email"
                isRequired={true}
                type="email"
                label="Email (required)"
                onSetValue={setUserEmail}
              />
              <FormInputFile onSetValue={setUserFile} />
              <div className="form-button-container form-group">
                <FormTermsConditions />
              </div>
              <div className="flex-container justify-content-end">
                <button type="submit" className="button button_with-icon button_medium">
                  Send Message
                  <span className="button__icon-container">
                    <i className="icon-arrow" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
