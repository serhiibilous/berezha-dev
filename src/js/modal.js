const teamMemberModalBackdrop = document.getElementById('teamMemberModal')
const teamMembers = document.querySelectorAll('.team__item-link')

if (teamMembers) {
  const modalCloseButton = teamMemberModalBackdrop.querySelector('.modal__close')
  const teamMemberModal = teamMemberModalBackdrop.querySelector('.modal')
  const body = document.body

  teamMemberModalBackdrop.addEventListener('click', (event) => {
    const element = event.target
    if (!element.closest('.modal')) {
      closeModal()
    }
  })

  teamMembers.forEach((teamMember) => {
    teamMember.addEventListener('click', (event) => {
      event.preventDefault()
      const teamMemberContainer = teamMember.closest('.team__item')
      const hiddenData = teamMemberContainer.querySelector('[data-team-member]')
      setupDataInModal(hiddenData)
      body.classList.add('overflowed')
      teamMemberModalBackdrop.classList.add('modal__backdrop_open')
      setTimeout(() => {
        teamMemberModal.classList.add('modal_open')
      }, 50)
    })
  })

  modalCloseButton.addEventListener('click', (event) => {
    event.preventDefault()
    closeModal()
  })

  function setupDataInModal(dataElement) {
    teamMemberModal.querySelector('[data-team-member-name]').innerHTML = dataElement.querySelector(
      '[data-team-member-name]'
    ).textContent

    teamMemberModal.querySelector('[data-team-member-position]').innerHTML = dataElement.querySelector(
      '[data-team-member-position]'
    ).textContent

    teamMemberModal.querySelector('[data-team-member-info]').innerHTML = dataElement.querySelector(
      '[data-team-member-info]'
    ).outerHTML

    teamMemberModal
      .querySelector('[data-team-member-linkedin]')
      .setAttribute('href', dataElement.querySelector('[data-team-member-linkedin]').textContent)

    teamMemberModal
      .querySelector('[data-team-member-photo]')
      .setAttribute('src', dataElement.querySelector('[data-team-member-photo]').textContent)
  }

  function closeModal() {
    teamMemberModal.classList.remove('modal_open')
    setTimeout(() => {
      teamMemberModalBackdrop.classList.remove('modal__backdrop_open')
      body.classList.remove('overflowed')
      clearModalData()
    }, 200)
  }

  function clearModalData() {
    teamMemberModal.querySelector('[data-team-member-name]').innerHTML = ''
    teamMemberModal.querySelector('[data-team-member-position]').innerHTML = ''
    teamMemberModal.querySelector('[data-team-member-info]').innerHTML = ''
    teamMemberModal.querySelector('[data-team-member-linkedin]').setAttribute('href', '')
    teamMemberModal.querySelector('[data-team-member-photo]').setAttribute('src', '')
  }
}
