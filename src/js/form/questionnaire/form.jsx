import React, { useState } from 'react'
import { Step } from './step'
import { FormUserData } from '../components/form-user-data'
import { QuestionsList } from './questions-list'
import { servicesQuestions, securityObjectiveQuestions, industryQuestions } from './questions'

export function QuestionnaireForm() {
  const [step, setStep] = useState(1)

  // User Data
  const [userFirstName, setUserFirstName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userComment, setUserComment] = useState('')
  const [userFile, setUserFile] = useState(null)

  // Services
  const [industry, setIndustry] = useState('')
  const [service, setService] = useState('')
  const [securityObjective, setSecurityObjective] = useState('')

  const handleSubmitForm = (event) => {
    event.preventDefault()
    const data = {
      industry,
      service,
      securityObjective,
      userFirstName,
      userLastName,
      userEmail,
      userComment,
      userFile,
    }
    console.table(data)
  }

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
                  <h2 className="heading-h4 precise-quote__heading">Any questions left unanswered?</h2>
                  <p className="sub-title">
                    Please send us a message, and our security expert will get back to you shortly.
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
                    onChangeUserFile={setUserFile}
                    step={step}
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
                    onChangeUserFile={setUserFile}
                    step={step}
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
                    onChangeUserFile={setUserFile}
                    step={step}
                  />
                </>
              }
              step={step}
              onChangeStep={setStep}
              currentStep={4}
            />
          </div>
        </section>
      </form>
    </div>
  )
}
