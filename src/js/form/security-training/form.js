import React, { useState } from 'react'
import { FormUserData } from '../components/form-user-data'

export function SecurityTrainingForm() {
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
    <section className="training-price">
      <div className="container">
        <form onSubmit={handleSubmitForm} className="training-price__container">
          <div className="training-price__left training-price__left_security">
            <h2 className="training-price__title heading-h2">Training Price</h2>
            <div className="training-price__security-content">
              <p className="body-text-2 training-price__list-title">for a group of 15-25 students</p>
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
                isTrainingForm
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
