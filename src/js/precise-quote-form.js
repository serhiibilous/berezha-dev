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

const preciseQuoteForm = document.getElementById('preciseQuote')
if (preciseQuoteForm) {
  preciseQuoteForm.addEventListener('submit', (event) => {
    event.preventDefault()

    // const obj = {}
    // const formData = new FormData(event.target)
    // for (let key of formData.keys()) {
    //   obj[key] = formData.get(key)
    // }
    //
    // console.log('formData', obj)

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
  })
}
