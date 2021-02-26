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
