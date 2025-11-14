const $list = [...document.querySelectorAll('.wrap *')].filter(item => (item.textContent || item.placeholder) && [...item.children].length === 0)

const whiteListLanguage = ['de', 'es', 'it', 'ru']
const browserLangFormated = whiteListLanguage.find(lang =>navigator.language.includes(lang)) || 'ru'

const getParam = new URLSearchParams(window.location.search)
const IsGetparamsLang = whiteListLanguage.indexOf(getParam.get('lang')) !== -1 ? whiteListLanguage[whiteListLanguage.indexOf(getParam.get('lang'))] : null
const targetLang = IsGetparamsLang ? whiteListLanguage[whiteListLanguage.indexOf(getParam.get('lang'))] : browserLangFormated
const translate = {
  ru: [
    'СПАСИБО!',
    'Спасибо за проявленный интерес к нашей продукции!',
    'Скоро с вами свяжутся наши консультанты.',
  ],
  es: [
    'Gracias',
    'Gracias por su interés en nuestros productos',
    'Nuestros asesores se pondrán en contacto con usted pronto.',
  ],
  de: [
    'Danke!',
    'Vielen Dank für Ihr Interesse an unseren Produkten',
    'Unsere Berater werden Sie bald kontaktieren.',
  ],
  it: [
    'Grazie',
    'Grazie per il vostro interesse per i nostri prodotti',
    'I nostri consulenti ti contatteranno presto.',
  ]
}

const targetTranslateArray = targetLang ? [...translate[targetLang]] : []
const format = string => string ? string.trim().toLowerCase() : undefined

//update head
document.documentElement.setAttribute('lang', targetLang)
document.title = targetLang ? targetTranslateArray[0] : translate.ru[0]

//translate
if (targetTranslateArray.length !== 0) {
  for (let i = 0; i < $list.length; i++) {
    for (let j = 0; j < translate.ru.length; j++) {
      if (format($list[i].textContent) === format(translate.ru[j])) {
        $list[i].textContent = targetTranslateArray[j]
        break
      }
      if (format($list[i].placeholder) === format(translate.ru[j])) {
        $list[i].placeholder = targetTranslateArray[j]
        break
      }
    }
  }
}
