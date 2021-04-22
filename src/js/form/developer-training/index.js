import ReactDOM from 'react-dom'
import React from 'react'
import { DeveloperTrainingForm } from './form'

const developerTrainingForm = document.getElementById('developerTrainingForm')
if (developerTrainingForm) ReactDOM.render(<DeveloperTrainingForm isSecurityTraining={true} />, developerTrainingForm)
