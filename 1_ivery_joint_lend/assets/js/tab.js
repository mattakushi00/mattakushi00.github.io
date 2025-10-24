[...document.querySelectorAll('.tab__item')].forEach((item, index) => {
  item.addEventListener('click', e => {
    if (e.target.tagName === 'A') return
    e.currentTarget.classList.toggle('active')
  })
})