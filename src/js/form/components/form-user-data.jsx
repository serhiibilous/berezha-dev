import React from 'react'
import { FormInput } from './form-input'
import { FormTextarea } from './form-textarea'
import { FormTermsConditions } from './form-terms-conditions'

export function FormUserData({
  step,
  onChangeUserFirstName,
  onChangeUserLastName,
  onChangeUserEmail,
  onChangeUserComment,
  onChangeUserPhone,
  onChangeAgreement,
  isTrainingForm = false,
  errors,
}) {
  const isCommendFieldPresent = !step || step === 4

  return (
    <div className="width-100">
      <div className="form-inline">
        <FormInput
          id="FirstName"
          name="FirstName"
          isRequired={true}
          label="First Name *"
          onSetValue={onChangeUserFirstName}
          errors={errors}
        />
        <FormInput
          id="LastName"
          name="LastName"
          isRequired={false}
          label="Last Name"
          onSetValue={onChangeUserLastName}
          errors={errors}
        />
      </div>
      <div className="form-inline">
        <FormInput
          id="Email"
          name="Email"
          isRequired={true}
          type="email"
          label="Email *"
          onSetValue={onChangeUserEmail}
          errors={errors}
        />
        <FormInput
          id="Phone"
          name="Phone"
          isRequired={true}
          type="tel"
          label="Phone"
          onSetValue={onChangeUserPhone}
          errors={errors}
        />
      </div>
      {isCommendFieldPresent && (
        <FormTextarea name="Comment" id="Comment" label="Comment" onSetValue={onChangeUserComment} />
      )}
      <div className="form-button-container">
        <div className="flex-container">
          <FormTermsConditions onSetValue={onChangeAgreement} errors={errors} />
        </div>
        {isTrainingForm ? (
          <button type="submit" className="button button_with-icon button_medium">
            Sign up for training
            <span className="button__icon-container">
              <i className="icon-arrow" />
            </span>
          </button>
        ) : (
          <button type="submit" className="button button_primary button_medium">
            Send Message
          </button>
        )}
      </div>
    </div>
  )
}
