const teamMemberModalBackdrop = document.getElementById('teamMemberModal')
const teamMembers = document.querySelectorAll('.team__item-link')
const teamMembersMobile = document.querySelectorAll('.team__item')
const windowWidth = window.innerWidth

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

  if (windowWidth <= 768) {
    teamMembersMobile.forEach((teamMember) => setModal(teamMember))
  }

  teamMembers.forEach((teamMember) => setModal(teamMember))

  function setModal(item) {
    item.addEventListener('click', (event) => {
      event.preventDefault()
      const teamMemberContainer = item.closest('.team__item') || item
      const hiddenData = teamMemberContainer.querySelector('[data-team-member]')
      setupDataInModal(hiddenData)
      body.classList.add('overflowed')
      teamMemberModalBackdrop.classList.add('modal__backdrop_open')
      setTimeout(() => {
        teamMemberModal.classList.add('modal_open')
      }, 50)
    })
  }

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

    teamMemberModal.querySelector('[data-team-member-linkedin]').innerHTML =
      dataElement.querySelector('[data-team-member-name]').textContent === 'Ihor Bliumental'
        ? '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M19.3332 1.69567V18.2998C19.3332 18.8707 18.8707 19.329 18.304 19.329H13.5457V12.104H15.9707L16.3332 9.28734H13.5415V7.48734C13.5415 6.67067 13.7665 6.1165 14.9373 6.1165H16.429V3.59567C16.1707 3.56234 15.2873 3.48317 14.254 3.48317C12.104 3.48317 10.629 4.79567 10.629 7.20817V9.28734H8.19567V12.104H10.629V19.3332H1.69567C1.129 19.3332 0.666504 18.8707 0.666504 18.304V1.69567C0.666504 1.129 1.129 0.666504 1.69567 0.666504H18.2998C18.8707 0.666504 19.3332 1.129 19.3332 1.69567Z" fill="#0048D4"/>\n' +
          '</svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n' +
          '              <path\n' +
          '                fill-rule="evenodd"\n' +
          '                clip-rule="evenodd"\n' +
          '                d="M4.47661 19.9956H0.330214V6.64587H4.47661V19.9956ZM2.40125 4.82481C1.07565 4.82481 0 3.72685 0 2.40125C0 1.07565 1.07565 0 2.40125 0C3.72685 0 4.8025 1.07565 4.8025 2.40125C4.8025 3.72685 3.72685 4.82481 2.40125 4.82481ZM19.9955 19.9957H15.858V13.4971C15.858 11.9484 15.8268 9.96222 13.7022 9.96222C11.5465 9.96222 11.2162 11.6449 11.2162 13.3856V19.9957H7.07425V6.646H11.051V8.46702H11.1091C11.6625 7.41815 13.0149 6.31125 15.0323 6.31125C19.2278 6.31125 19.9999 9.07403 19.9999 12.6625V19.9957H19.9955Z"\n' +
          '                fill="#0048D4"\n' +
          '              />\n' +
          '            </svg>'

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
