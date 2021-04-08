const faqItems = document.querySelectorAll('.faq__item-title')
if (faqItems) {
  faqItems.forEach((faq) => {
    faq.addEventListener('click', (e) => {
      const el = e.currentTarget
      el.closest('.faq__item').classList.toggle('faq__item_open')
    })
  })
}
