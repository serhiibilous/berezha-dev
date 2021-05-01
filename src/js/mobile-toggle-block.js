const mobileToggleableBlocks = document.querySelectorAll('[data-toggle-block]')

if (mobileToggleableBlocks) {
  mobileToggleableBlocks.forEach((block) => {
    const button = block.querySelector('[data-toggle-button]')
    const items = block.querySelectorAll('[data-toggle-item]')
    let isOpen = false
    const dataToggleBlockCount = block.getAttribute('data-toggle-block')
    const counter = dataToggleBlockCount ? +dataToggleBlockCount : 3

    initializeList(window.innerWidth <= 992)

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 992) {
        initializeList(true)
      } else {
        initializeList(false)
      }
    })

    function initializeList(isMobile) {
      if (isMobile) {
        button.classList.remove('hide')
      } else {
        isOpen = false
        button.classList.add('hide')
      }
      items.forEach((item, index) => {
        if (isMobile) {
          if (index >= counter) item.classList.add('hide')
        } else {
          item.classList.remove('hide')
        }
      })
    }

    button.addEventListener('click', (event) => {
      event.preventDefault()
      const buttonElement = event.target
      buttonElement.classList.toggle('is-open')
      items.forEach((item, index) => {
        if (isOpen) {
          if (index >= counter) item.classList.add('hide')
        } else {
          item.classList.remove('hide')
        }
      })
      isOpen = !isOpen
    })
  })
}
