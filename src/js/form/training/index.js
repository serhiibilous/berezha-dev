import ReactDOM from 'react-dom'
import React from 'react'
import { TrainingForm } from './form'

const trainingForm = document.getElementById('trainingForm')
if (trainingForm) ReactDOM.render(<TrainingForm />, trainingForm)
