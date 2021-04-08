import React from 'react'
import { FormInput } from './form-input'
import { FormTextarea } from './form-textarea'
import { FormInputFile } from './form-input-file'
import { FormTermsConditions } from './form-terms-conditions'

export function FormUserData({
  step,
  onChangeUserFirstName,
  onChangeUserLastName,
  onChangeUserEmail,
  onChangeUserComment,
  onChangeUserFile,
}) {
  const isFileFieldPresent = !!step && step === 4
  const isCommendFieldPresent = !step || step === 4

  return (
    <div>
      <div className="form-inline">
        <FormInput
          id="FirstName"
          name="FirstName"
          isRequired={true}
          label="First Name (required)"
          onSetValue={onChangeUserFirstName}
        />
        <FormInput
          id="LastName"
          name="LastName"
          isRequired={false}
          label="Last Name (optional)"
          onSetValue={onChangeUserLastName}
        />
      </div>
      <FormInput
        id="Email"
        name="Email"
        isRequired={true}
        type="email"
        label="Email (required)"
        onSetValue={onChangeUserEmail}
      />
      {isCommendFieldPresent && (
        <FormTextarea name="Comment" id="Comment" label="Comment (optional)" onSetValue={onChangeUserComment} />
      )}
      {isFileFieldPresent && <FormInputFile onSetValue={onChangeUserFile} />}
      <div className="form-button-container flex-center">
        <div className="flex-container">
          <FormTermsConditions />
        </div>
        <button type="submit" className="button button_primary button_medium">
          Send Message
        </button>
      </div>
    </div>
  )
}
