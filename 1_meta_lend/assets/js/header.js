const header = document.querySelector('.header')
const setOpacity = () => window.scrollY > 0 ? header.classList.add('active') : header.classList.remove('active')
setOpacity()
window.addEventListener('scroll', setOpacity, { passive: true })