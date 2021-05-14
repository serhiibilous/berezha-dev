const currentYear = document.getElementById('currentYear')
if (currentYear) {
  currentYear.innerHTML = new Date().getFullYear().toString()
}
