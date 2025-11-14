const translate = []
const list = [...document.querySelectorAll('.wrap *')].filter(item => (item.textContent || item.placeholder) && [...item.children].length === 0)
const format = string => string ? string.trim().toLowerCase() : undefined
//translate
for (let i = 0; i < list.length; i++) {
  for (let j = 0; j < translate.length; j++) {
    if (format(list[i].textContent) === format(translate[j][0])) {
      list[i].textContent = translate[j][1]
      break
    }
    if (format(list[i].placeholder) === format(translate[j][0])) {
      list[i].placeholder = translate[j][1]
      break
    }
  }
}