import { FormInput } from './templates'

function Form(container, prefix, withFile, withComment) {
  this.container = container
  this.prefix = prefix
  this.withFile = withFile
  this.withComment = withComment

  this.build = function () {
    const inlineFormSection = document.createElement('div')
    inlineFormSection.classList.add('form-inline')
    const inputFirstName = new FormInput('First Name (required)', 'FirstName', 'FirstName' + this.prefix)
    const inputLastName = new FormInput('Last Name (optional)', 'LastName', 'LastName' + this.prefix)
    const inputEmail = new FormInput('Email (required)', 'Email', 'Email' + this.prefix, 'email')
    const inputComment = new FormInput('Comment (optional)', 'Comment', 'Comment' + this.prefix, '', 'textarea')
    inlineFormSection.appendChild(inputFirstName.build())
    inlineFormSection.appendChild(inputLastName.build())
    this.container.appendChild(inlineFormSection)
    this.container.appendChild(inputEmail.build())
    this.container.appendChild(inputComment.build())
  }

  this.buildContainer = function () {
    const form = document.createElement('form')
    form.addEventListener('submit', handleSubmitForm)
  }

  this.buildSubmit
}

const form = new Form(document.getElementById('form'))
form.build()

function handleSubmitForm(event) {
  event.preventDefault()
  fetch('https://google.com', {
    method: 'POST',
    body: new FormData(event.target),
  })
    .then(function (response) {
      if (response.ok) {
        return response.json()
      }
      return Promise.reject(response)
    })
    .then(function (data) {
      console.log(data)
    })
    .catch(function (error) {
      console.warn(error)
    })
}
