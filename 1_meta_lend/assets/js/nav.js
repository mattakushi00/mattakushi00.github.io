const linkList = [...document.querySelectorAll('.header .nav__link')]
const blockList = linkList.map(item => document.querySelector(item.getAttribute('href')))
const headerHeight = document.querySelector('.header').clientHeight
let active = document.querySelector('.header .nav__link.active')
const shift = (el) => el.getBoundingClientRect().top + window.scrollY - headerHeight - 15
const option = {
  root: null,
  rootMargin: `-${headerHeight}px 0px 100px`,
  threshold: 1
}

linkList.forEach((item, i) => {
  item.addEventListener('click', e => {
    const target = document.querySelector(`${item.getAttribute('href')}`)
    e.preventDefault()
    scrollTo({
      top: shift(target),
      left: 0,
      behavior: 'smooth'
    })
  })
})

const callback = (entrys) => {
  for (let i = 0; i < entrys.length; i++) {
    const index = blockList.indexOf(entrys[i].target)
    if (entrys[i].isIntersecting) {
      active.classList.remove('active')
      linkList[index].classList.add('active')
      active = linkList[index]
      break
    }
    linkList[index].classList.remove('active')
  }
}
const observer = new IntersectionObserver(callback, option)
blockList.forEach(item => observer.observe(item))