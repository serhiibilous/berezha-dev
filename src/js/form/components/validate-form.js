export const validateForm = (fields) => {
  let errors = []
  const reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const rePhone = /^[0-9\+\-]+$/

  fields.forEach((field) => {
    if (field.type === 'text') {
      if (field.value.length === 0) {
        errors = [...errors, { key: field.name, name: 'Field is required' }]
      } else {
        errors = [...errors.filter((error) => error.key !== field.name)]
      }
    }

    if (field.type === 'email') {
      if (field.value.length === 0) {
        errors = [...errors, { key: field.name, name: 'Field is required' }]
      } else if (!reEmail.test(field.value)) {
        errors = [...errors, { key: field.name, name: 'Email is invalid' }]
      } else {
        errors = [...errors.filter((error) => error.key !== field.name)]
      }
    }

    if (field.type === 'tel') {
      if (field.value.length === 0) {
        errors = [...errors, { key: field.name, name: 'Field is required' }]
      } else if (!rePhone.test(field.value)) {
        errors = [...errors, { key: field.name, name: 'Phone is invalid' }]
      } else {
        errors = [...errors.filter((error) => error.key !== field.name)]
      }
    }

    if (field.type === 'checkbox') {
      if (!field.value) {
        errors = [...errors, { key: field.name, name: 'Field is required' }]
      } else {
        errors = [...errors.filter((error) => error.key !== field.name)]
      }
    }
  })

  return errors
}
