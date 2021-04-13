import ReactDOM from 'react-dom'
import React from 'react'
import { TrainingForm } from './form'

const trainingForm = document.getElementById('trainingForm')
if (trainingForm) ReactDOM.render(<TrainingForm />, trainingForm)

const trainingFormSecurity = document.getElementById('trainingFormSecurity')
if (trainingFormSecurity) ReactDOM.render(<TrainingForm isSecurityTraining={true} />, trainingForm)
