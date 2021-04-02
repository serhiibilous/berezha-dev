export function FormInput(label, name, id, type = 'text', tagName = 'input') {
  this.label = label
  this.name = name
  this.id = id
  this.type = type
  this.tagName = tagName

  this.buildLabel = function () {
    const label = document.createElement('label')
    label.classList.add('form-label')
    label.setAttribute('for', this.id)
    label.textContent = this.label
    return label
  }

  this.buildInput = function (tagName) {
    const input = document.createElement(tagName)
    input.classList.add('form-control')
    if (tagName === 'textarea') {
      input.classList.add('form-control_textarea')
    } else {
      input.setAttribute('type', this.type)
    }
    input.setAttribute('name', this.name)
    input.setAttribute('id', this.id)
    input.addEventListener('change', handleChangeInput)
    return input
  }

  this.build = function () {
    const container = document.createElement('div')
    container.classList.add('form-group')
    const label = this.buildLabel()
    const input = this.buildInput(this.tagName)
    container.appendChild(input)
    container.appendChild(label)
    return container
  }
}

// export function FormTextArea(label, name, id) {
//   this.label = label
//   this.name = name
//   this.id = id
//
//   this.build = function () {
//     const container = document.createElement('div')
//     container.classList.add('form-group')
//     const textArea = document.createElement('textarea')
//     textArea.classList.add('form-group ')
//     const label = this.buildInput()
//     container.appendChild(label)
//     container.appendChild(input)
//     return container
//   }
// }

function handleChangeInput(event) {
  const element = event.target
  console.log(element)

  if (element.value.length > 0) {
    element.classList.add('has-value')
  } else {
    element.classList.remove('has-value')
  }
}
