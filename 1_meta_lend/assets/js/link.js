const checkbox = document.querySelector('.contact__checkbox')
const links = [...document.querySelectorAll('.contacts__link')]
const redirect = e => e.preventDefault()

links.forEach(item => {
  item.classList.remove('active')
  item.addEventListener('click', redirect)
})

checkbox.addEventListener('change', e => {
  links.forEach(item => {
    if (e.currentTarget.checked) {
      item.classList.add('active')
      item.removeEventListener('click', redirect)
      return
    }
    item.classList.remove('active')
    item.addEventListener('click', redirect)
  })
})