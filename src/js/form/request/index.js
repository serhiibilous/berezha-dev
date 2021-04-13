import ReactDOM from 'react-dom'
import React from 'react'
import { RequestForm } from './form'

const requestForm = document.getElementById('PrecizeQuoteForm')
if (requestForm) ReactDOM.render(<RequestForm />, requestForm)
