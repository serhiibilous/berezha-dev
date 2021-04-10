import React, { useState } from 'react'
import { FormUserData } from '../components/form-user-data'

export function ContactForm() {
  const [userFirstName, setUserFirstName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userComment, setUserComment] = useState('')
  const [userFile, setUserFile] = useState(null)

  const handleSubmitForm = (event) => {
    event.preventDefault()
    const data = {
      userFirstName,
      userLastName,
      userEmail,
      userComment,
      userFile,
    }
    console.table(data)
  }

  return (
    <div className="contact__form">
      <form onSubmit={handleSubmitForm}>
        <FormUserData
          step={4}
          onChangeUserFirstName={setUserFirstName}
          onChangeUserLastName={setUserLastName}
          onChangeUserEmail={setUserEmail}
          onChangeUserComment={setUserComment}
          onChangeUserFile={setUserFile}
        />
      </form>
    </div>
  )
}
