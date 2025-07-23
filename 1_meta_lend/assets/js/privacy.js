openAndClose('.coockie', '.coockie__close')
openAndClose('.politCoockie', '.politCoockie__close', '.openPolitCoockie')
openAndClose('.politPersonal', '.politPersonal__close', '.openPolitPersonal')

function openAndClose(contentClass, closeButtonClass, openButtonClass = undefined) {
  const content = document.querySelector(contentClass)
  const closeButton = document.querySelector(closeButtonClass)
  const openButton = openButtonClass ? [...document.querySelectorAll(openButtonClass)] : null

  if (openButton) {
    openButton.forEach(btn => {
      btn.addEventListener('click', () => {
        content.style.display = 'flex'
        document.documentElement.style.overflow = 'hidden'
      })
    })
  }

  closeButton.addEventListener('click', () => {
    content.style.display = 'none'
    document.documentElement.style.overflow = ''
  })

  content.addEventListener('click', event => {
    if (content === event.target) {
      content.style.display = 'none'
      document.documentElement.style.overflow = ''
    }
  })
}