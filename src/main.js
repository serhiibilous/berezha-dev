console.log('It works')
const HEIGHT_FIRST_BLOCK = 100

document.addEventListener('scroll', () => {
  const header = document.getElementById('header')
  if (window.scrollY > HEIGHT_FIRST_BLOCK) {
    header.classList.add('header_fixed')
  } else {
    header.classList.remove('header_fixed')
  }
})

const mobileNavButton = document.getElementById('mobileNavButton')
const headerNavigation = document.getElementById('headerNavigation')
mobileNavButton.addEventListener('click', (e) => {
  const el = e.currentTarget
  el.classList.toggle('open-navigation')
  headerNavigation.classList.toggle('open-navigation')
  console.log(el)
})
