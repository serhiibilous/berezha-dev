import ReactDOM from 'react-dom'
import React from 'react'
import { ContactForm } from './form'

const trainingForm = document.getElementById('contactForm')
if (trainingForm) ReactDOM.render(<ContactForm />, trainingForm)
