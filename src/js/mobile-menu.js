const mobileNavButton = document.getElementById('mobileNavButton')
const headerNavigation = document.getElementById('headerNavigation')

mobileNavButton.addEventListener('click', (e) => {
  const el = e.currentTarget
  el.classList.toggle('open-navigation')
  headerNavigation.classList.toggle('open-navigation')
  document.body.classList.toggle('overflowed')
})
