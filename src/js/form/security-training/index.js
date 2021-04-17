import ReactDOM from 'react-dom'
import React from 'react'
import { SecurityTrainingForm } from './form'

const securityTrainingForm = document.getElementById('securityTrainingForm')
if (securityTrainingForm) ReactDOM.render(<SecurityTrainingForm isSecurityTraining={true} />, securityTrainingForm)
