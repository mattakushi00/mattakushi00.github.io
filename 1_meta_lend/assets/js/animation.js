const dom = [...document.querySelectorAll('.wrap h3, .wrap p')]
const animationObserver = new IntersectionObserver(entries => {
  for (let i = 0; i < entries.length; i++) {
    if (entries[i].isIntersecting) {
      entries[i].target.classList.add('animation-fadeIn')
      entries[i].target.style.opacity = '1'
    }
  }
}, {
  root: null,
  threshold: 1
})

dom.forEach(item => {
  item.style.opacity = '0'
  animationObserver.observe(item)
})