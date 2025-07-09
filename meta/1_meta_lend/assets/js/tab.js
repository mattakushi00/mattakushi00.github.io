const tabArray = [...document.querySelectorAll('.tab__item')]
const tabTextArray = [...document.querySelectorAll('.tab__item-text')]
const activeClass = 'active'
let tabAcive = tabArray.findIndex(item => item.classList.contains(activeClass))

tabTextArray.forEach((item, index) => item.style.display = index !== tabAcive ? 'none' : 'block')
tabArray.forEach((item, index) => {
  item.addEventListener('click', e => {
    console.log(e.target.tagName)
    if (e.target.tagName === 'A') return
    e.currentTarget.classList.toggle(activeClass)
    tabTextArray[index].style.display = e.currentTarget.classList.contains(activeClass) ? 'block' : 'none'
  })
})