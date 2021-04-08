const HEIGHT_FIRST_BLOCK = 700

document.addEventListener('scroll', () => {
  const body = document.body
  if (window.scrollY > HEIGHT_FIRST_BLOCK) {
    body.classList.add('header-home-cover-hidden')
  } else {
    body.classList.remove('header-home-cover-hidden')
  }
})
