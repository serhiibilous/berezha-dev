import React, { useState, useEffect } from 'react'
import { Step } from './step'
import { FormUserData } from '../components/form-user-data'
import { QuestionsList } from './questions-list'
import { servicesQuestions, securityObjectiveQuestions, industryQuestions } from './questions'
import { INTEGROMAT_API_KEY } from '../constants'
import { useFetch } from '../components/use-fetch'
import { Loader } from '../components/loader'
import { Success } from '../components/success'
import { Error } from '../components/error'
import { validateForm } from '../components/validate-form'

export function QuestionnaireForm() {
  const [step, setStep] = useState(1)

  // User Data
  const [userFirstName, setUserFirstName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userComment, setUserComment] = useState('')
  const [agreement, setAgreement] = useState('')
  const [validationErrors, setValidationErrors] = useState([])
  const [shouldValidate, setShouldValidate] = useState(false)

  // Services
  const [industry, setIndustry] = useState('')
  const [service, setService] = useState('')
  const [securityObjective, setSecurityObjective] = useState('')

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
      industry: industry,
      service: service,
      objective: securityObjective,
      first_name: userFirstName,
      last_name: userLastName,
      email: userEmail,
      phone: userPhone,
      message: userComment,
      pageUrl: window.location.href,
      formName: 'QuestionnaireForm',
    }

    if (errors.length === 0) {
      // fetchData(data)
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
    <div className="container">
      <form onSubmit={handleSubmitForm}>
        <section className="precise-quote">
          <div className="precise-quote__wrapper" style={{ transform: ` translateX(-${step - 1}00%)` }}>
            <Step
              left={
                <>
                  <p className="heading-h3 precise-quote__question">Pick your industry</p>
                  <QuestionsList
                    questions={industryQuestions}
                    service="industry"
                    onSelectService={setIndustry}
                    onChangeStep={setStep}
                    step={step}
                  />
                </>
              }
              right={
                <>
                  <h2 className="heading-h4 precise-quote__heading">See how we can help you defeat security threats</h2>
                  <p className="sub-title">
                    Answer three questions and find out how our capabilities match your business goals.
                  </p>
                </>
              }
              step={step}
              service="industry"
              onChangeStep={setStep}
              currentStep={1}
            />

            <Step
              left={
                <>
                  <p className="heading-h3 precise-quote__question">Pick our services</p>
                  <QuestionsList
                    questions={servicesQuestions}
                    service="services"
                    onSelectService={setService}
                    onChangeStep={setStep}
                    step={step}
                  />
                </>
              }
              right={
                <>
                  <p className="sub-title precise-quote__question-title">Not sure what to choose?</p>
                  <p className="body-text-2 precise-quote__question-sub-title">
                    Send us a message and our security expert will get back to you shortly.
                  </p>
                  <FormUserData
                    onChangeUserFirstName={setUserFirstName}
                    onChangeUserLastName={setUserLastName}
                    onChangeUserEmail={setUserEmail}
                    onChangeUserComment={setUserComment}
                    onChangeUserPhone={setUserPhone}
                    step={step}
                    onChangeAgreement={setAgreement}
                    errors={validationErrors}
                  />
                </>
              }
              service="services"
              step={step}
              onChangeStep={setStep}
              currentStep={2}
            />

            <Step
              left={
                <>
                  <p className="heading-h3 precise-quote__question">Pick your security objective</p>
                  <QuestionsList
                    questions={securityObjectiveQuestions}
                    service="securityObjective"
                    onSelectService={setSecurityObjective}
                    onChangeStep={setStep}
                    step={step}
                  />
                </>
              }
              right={
                <>
                  <p className="sub-title precise-quote__question-title">Not sure what to choose?</p>
                  <p className="body-text-2 precise-quote__question-sub-title">
                    Send us a message and our security expert will get back to you shortly.
                  </p>
                  <FormUserData
                    onChangeUserFirstName={setUserFirstName}
                    onChangeUserLastName={setUserLastName}
                    onChangeUserEmail={setUserEmail}
                    onChangeUserComment={setUserComment}
                    onChangeUserPhone={setUserPhone}
                    step={step}
                    onChangeAgreement={setAgreement}
                    errors={validationErrors}
                  />
                </>
              }
              service="securityObjective"
              step={step}
              onChangeStep={setStep}
              currentStep={3}
            />

            <Step
              left={
                <>
                  <p className="heading-h3 precise-quote__question">Customize your request</p>
                  <ul className="body-text-2  precise-quote__selected-list">
                    <li>
                      <span>Industry:</span> {industry}
                    </li>
                    <li>
                      <span>Service:</span> {service}
                    </li>
                    <li>
                      <span>Objective:</span> {securityObjective}
                    </li>
                  </ul>
                  <p className="sub-title">
                    Please send us a message, and our security expert will get back to you shortly.
                  </p>
                </>
              }
              right={
                <>
                  <FormUserData
                    onChangeUserFirstName={setUserFirstName}
                    onChangeUserLastName={setUserLastName}
                    onChangeUserEmail={setUserEmail}
                    onChangeUserComment={setUserComment}
                    onChangeUserPhone={setUserPhone}
                    step={step}
                    onChangeAgreement={setAgreement}
                    errors={validationErrors}
                  />
                </>
              }
              step={step}
              onChangeStep={setStep}
              currentStep={4}
            />
          </div>
          {isLoading && <Loader />}
          {success && <Success />}
          {error && <Error />}
        </section>
      </form>
    </div>
  )
}
