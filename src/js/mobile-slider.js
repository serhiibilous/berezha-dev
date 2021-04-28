const mobileSlider = document.getElementById('mobileSlider')
const screenWidth = window.innerWidth
const pageIndent = 32

if (mobileSlider && screenWidth <= 992) {
  const screenWidth = window.innerWidth
  const slides = mobileSlider.querySelectorAll('[data-slider-item]')
  const pagination = mobileSlider.querySelector('.mobile-slider__pagination')
  const content = mobileSlider.querySelector('.mobile-slider__content')
  let sliderWidth = screenWidth - pageIndent

  window.addEventListener('resize', () => {
    sliderWidth = window.innerWidth - pageIndent
    setSliderWidth(window.innerWidth <= 992 ? sliderWidth : null)
  })

  slides.forEach((slide, index) => {
    setSliderWidth(sliderWidth)
    const paginationItem = document.createElement('div')
    paginationItem.classList.add('mobile-slider__pagination-item')
    if (index === 0) paginationItem.classList.add('active')
    pagination.appendChild(paginationItem)
  })

  function setSliderWidth(width) {
    slides.forEach((slide) => {
      if (!width) {
        slide.style.minWidth = 'auto'
        return
      }
      slide.style.minWidth = width + 'px'
    })
  }

  const paginationItems = pagination.querySelectorAll('.mobile-slider__pagination-item')

  content.addEventListener('scroll', (e) => {
    const scrollPosition = e.target.scrollLeft
    const currentSlideNumber = Math.round(scrollPosition / sliderWidth)

    paginationItems.forEach((item, index) => {
      item.classList.remove('active')
      if (currentSlideNumber === index) {
        item.classList.add('active')
      }
    })

    // slides[currentSlideNumber].classList.add('active')
    // console.log(e.target.scrollLeft)
    // container.scrollLeft = 0
  })
}
