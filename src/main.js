import './js/precise-quote-form'

console.log('It works')
const HEIGHT_FIRST_BLOCK = 100
const body = document.body

document.addEventListener('scroll', () => {
  const header = document.getElementById('header')
  if (window.scrollY > HEIGHT_FIRST_BLOCK) {
    header.classList.add('header_fixed')
  } else {
    header.classList.remove('header_fixed')
  }
})

// Mobile Menu
const mobileNavButton = document.getElementById('mobileNavButton')
const headerNavigation = document.getElementById('headerNavigation')
mobileNavButton.addEventListener('click', (e) => {
  const el = e.currentTarget
  el.classList.toggle('open-navigation')
  headerNavigation.classList.toggle('open-navigation')
  body.classList.toggle('overflowed')
  console.log(el)
})

// FAQ
const faqItems = document.querySelectorAll('.faq__control')
faqItems.forEach((faq) => {
  faq.addEventListener('click', (e) => {
    const el = e.currentTarget
    el.closest('.faq__item').classList.toggle('faq__item_open')
  })
})
