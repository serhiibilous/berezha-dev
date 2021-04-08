import ReactDOM from 'react-dom'
import React from 'react'
import { QuestionnaireForm } from './form'

const questionnaireForm = document.getElementById('questionnaireForm')
if (questionnaireForm) ReactDOM.render(<QuestionnaireForm />, questionnaireForm)
