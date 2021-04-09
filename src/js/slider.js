const trainersSlider = document.getElementById('trainersSlider')
if (trainersSlider) {
  const firstStepCoefficient = 0.583333333333
  const secondStepCoefficient = 0.416666666667
  const sliderItemWidth = 312

  let step = 1
  let width = trainersSlider.offsetWidth
  let sliderFirstStepWidth = width * firstStepCoefficient
  let sliderSecondStepWidth = width * secondStepCoefficient

  const trainersList = document.querySelector('.trainers__list')
  const trainersCount = trainersList.querySelectorAll('.team__item').length
  const prevControl = document.querySelector('.trainers__control-prev')
  const nextControl = document.querySelector('.trainers__control-next')
  const moreControl = document.querySelector('.trainers__control-more')

  window.addEventListener('onresize ', () => {
    width = trainersSlider.offsetWidth
    sliderFirstStepWidth = width * firstStepCoefficient
    sliderSecondStepWidth = width * secondStepCoefficient
  })

  function toggleControlButtons() {
    switch (step) {
      case 1:
        prevControl.classList.add('hide')
        nextControl.classList.add('hide')
        moreControl.classList.remove('hide')
        return
      case 2:
        prevControl.classList.remove('hide')
        nextControl.classList.remove('hide')
        moreControl.classList.add('hide')
        return
      case 3:
        nextControl.classList.add('hide')
        prevControl.classList.remove('hide')
        moreControl.classList.add('hide')
        return
      default:
        return
    }
  }

  moreControl.addEventListener('click', (event) => {
    event.preventDefault()
    trainersSlider.style.transform = `translateX(-${sliderFirstStepWidth}px)`
    step = step + 1
    toggleControlButtons()
  })

  prevControl.addEventListener('click', (event) => {
    event.preventDefault()
    if (step === 1) return

    if (step === 2) {
      trainersSlider.style.transform = `translateX(0)`
    } else if (step === 3) {
      trainersSlider.style.transform = `translateX(-${sliderFirstStepWidth}px)`
    }

    step = step - 1
    toggleControlButtons()
  })

  nextControl.addEventListener('click', (event) => {
    event.preventDefault()
    if (step === 3) return

    if (step === 1) {
      trainersSlider.style.transform = `translateX(-${sliderFirstStepWidth}px)`
    } else if (step === 2) {
      trainersSlider.style.transform = `translateX(-${trainersCount * sliderItemWidth - sliderSecondStepWidth}px)`
    }
    step = step + 1
    toggleControlButtons()
  })
}
