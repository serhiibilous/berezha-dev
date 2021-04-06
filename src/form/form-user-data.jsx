import React, { useState } from 'react'
import { FormInput } from './form-input'
import { FormTextarea } from './form-textarea'
import { FormInputFile } from './form-input-file'
import { FormTermsConditions } from './form-terms-conditions'

export function FormUserData({ step }) {
  const [userFirstName, setUserFirstName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userComment, setUserComment] = useState('')
  const [userFile, setUserFile] = useState(null)

  const isFileFieldPresent = !!step && step === 4

  const handleSubmitForm = (event) => {
    event.preventDefault()
    console.log('userFirstName', userFirstName)
    console.log('userLastName', userLastName)
    console.log('userEmail', userEmail)
    console.log('userComment', userComment)
    console.log('userFile', userFile)
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="form-inline">
        <FormInput
          id="FirstName"
          name="FirstName"
          isRequired={true}
          label="First Name (required)"
          inputValue={userFirstName}
          onSetValue={setUserFirstName}
        />
        <FormInput
          id="LastName"
          name="LastName"
          isRequired={false}
          label="Last Name (optional)"
          inputValue={userLastName}
          onSetValue={setUserLastName}
        />
      </div>
      <FormInput
        id="Email"
        name="Email"
        isRequired={true}
        type="email"
        label="Email (required)"
        inputValue={userEmail}
        onSetValue={setUserEmail}
      />
      <FormTextarea
        name="Comment"
        id="Comment"
        label="Comment (optional)"
        inputValue={userComment}
        onSetValue={setUserComment}
      />
      {isFileFieldPresent && <FormInputFile value={userFile} onSetValue={setUserFile} />}
      <div className="form-button-container flex-center">
        <div className="flex-container">
          <FormTermsConditions />
        </div>
        <button type="submit" className="button button_primary button_medium">
          Send Message
        </button>
      </div>
    </form>
  )
}
