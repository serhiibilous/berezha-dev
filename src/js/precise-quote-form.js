// Precise Quote Form
import { servicesQuestions, securityObjectiveQuestions, industryQuestions } from './precise-quote-questions'

const serviceQuestionsContainer = document.getElementById('serviceQuestionsContainer')
const securityObjectiveQuestionsContainer = document.getElementById('securityObjectiveQuestionsContainer')
const industryQuestionsContainer = document.getElementById('industryQuestionsContainer')

if (serviceQuestionsContainer) renderQuestions('service', servicesQuestions, serviceQuestionsContainer)
if (securityObjectiveQuestionsContainer)
  renderQuestions('securityObjective', securityObjectiveQuestions, securityObjectiveQuestionsContainer)
if (industryQuestionsContainer) renderQuestions('industry', industryQuestions, industryQuestionsContainer)

function renderQuestions(service, list, container) {
  list.map((item) => {
    const listElement = document.createElement('li')
    listElement.innerHTML = `<li>
            <input
              class="precise-quote__input_radio"
              type="radio"
              value="ProfessionalTraining"
              name="${service}"
              id="${item.key}_${service}"
            />
            <label class="precise-quote__label_radio" for="${item.key}_${service}">${item.name}</label>
          </li>`

    container.appendChild(listElement)
  })
}

// function handleInputsChange() {
//   document.querySelectorAll('.form-control').forEach((formItem) => {
//     console.log('formItem', formItem)
//     formItem.addEventListener('change', (event) => {
//       const element = event.target
//       console.log('element', element)
//
//       if (element.value.length > 0) {
//         element.classList.add('has-value')
//       } else {
//         element.classList.remove('has-value')
//       }
//     })
//   })
// }
// handleInputsChange()

// function setStep(element, step) {
//   element.textContent = step
//   const dataStepText = preciseQuoteForm.querySelector(`[data-step-text]`)
//   const stepBackButton = preciseQuoteForm.querySelector(`[data-step-back]`)
//   if (step === 4) {
//     dataStepText.classList.add('hide')
//   } else {
//     dataStepText.classList.remove('hide')
//   }
//
//   if (step === 1) {
//     stepBackButton.classList.add('hide')
//   } else {
//     stepBackButton.classList.remove('hide')
//   }
// }

function changeStep(steps, currentStep) {
  steps.forEach((step) => {
    step.classList.add('hide')
    if (Number(step.dataset.step) !== currentStep) {
      step.classList.add('hide')
    } else {
      step.classList.remove('hide')
    }
  })
}

const preciseQuoteForm = document.getElementById('preciseQuote')
// if (preciseQuoteForm) {
//   let file = null
//   const steps = preciseQuoteForm.querySelectorAll(`[data-step]`)
//   const radioButtons = preciseQuoteForm.querySelectorAll('.precise-quote__input_radio')
//   let currentStep = 1
//   const stepCounter = preciseQuoteForm.querySelector(`[data-step-counter]`)
//   const stepBackButton = preciseQuoteForm.querySelector(`[data-step-back]`)
//   const inputFile = document.querySelector(`[data-file]`)
//   const fileContainer = document.querySelector(`[data-file-attached]`)
//   setStep(stepCounter, currentStep)
//   changeStep(steps, currentStep)
//
//   function deleteFile(e) {
//     console.log('e', e)
//     inputFile.value = null
//     file = null
//     fileContainer.innerHTML = ''
//   }
//
//   inputFile.addEventListener('change', (e) => {
//     fileContainer.innerHTML = ''
//     const uploadedFile = e.target.files[0]
//     const fileContent = document.createElement('div')
//     fileContent.classList.add('form-control_attached-file')
//     const fileDeleteButton = document.createElement('div')
//     fileDeleteButton.classList.add('form-control_delete-file-button')
//
//     fileDeleteButton.addEventListener('click', deleteFile)
//     const fileName = document.createElement('div')
//     fileName.classList.add('form-control_attached-file-name')
//     fileName.textContent = uploadedFile.name
//
//     fileContent.appendChild(fileDeleteButton)
//     fileContent.appendChild(fileName)
//     fileContainer.append(fileContent)
//     file = uploadedFile
//   })
//
//   stepBackButton.addEventListener('click', (e) => {
//     e.preventDefault()
//     if (currentStep === 1) return
//     const changedStep = currentStep - 1
//     currentStep = changedStep
//     setStep(stepCounter, changedStep)
//     changeStep(steps, changedStep)
//   })
//
//   radioButtons.forEach((radio) => {
//     radio.addEventListener('change', (e) => {
//       const changedStep = currentStep + 1
//       currentStep = changedStep
//       setStep(stepCounter, changedStep)
//       changeStep(steps, changedStep)
//     })
//   })
//
//   preciseQuoteForm.addEventListener('submit', (event) => {
//     event.preventDefault()
//
//     fetch('https://google.com', {
//       method: 'POST',
//       body: new FormData(event.target),
//     })
//       .then(function (response) {
//         if (response.ok) {
//           return response.json()
//         }
//         return Promise.reject(response)
//       })
//       .then(function (data) {
//         console.log(data)
//       })
//       .catch(function (error) {
//         console.warn(error)
//       })
//   })
// }
