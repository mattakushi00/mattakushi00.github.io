(()=> {
    const translate = [
        [`Выберите газету и получите`, `Vyberte si noviny a získejte`],
        [`подарок`, `DÁREK`],
        [`75 €`, `2 000 Kč`],
        [`на продукты для здоровья`, `na nákup produktů pro zdraví`],
        [`После открытия газеты наш оператор свяжется с вами в ближайшее время`, `Po otevření novin se vám náš operátor brzy ozve`],
        [`Подарок закрепится за вами`, `Dárek vám bude rezervován`],
        [`Просто выберите, что вам ближе`, `Stačí si vybrat, co vás oslovuje víc`],
        [`Какая тема вам интереснее?`, `Které téma vás zajímá nejvíce?`],
        [`Открыть и получить подарок`, `Otevřít a získat dárek`],
        [`Ваш`, `Váš`],
        [`подарок`, `dárek`],
        [`уже ждет вас!`, `už na vás čeká!`],
        [`Ваш подарок получен!`, `Dárek je váš!`],
        [`Вы открыли газету`, `Otevřeli jste noviny`],
        [`«Жизнь в гармонии»`, `„Život v harmonii“`],
        [`«Новости науки»`, `„Vědecké novinky“`],
        [`«Разговор с терапевтом»`, `„Rozhovor s lékařem“`],
        [`Подарок закреплён за вами. Наш оператор свяжется с вами в ближайшее время. Ничего дополнительно делать не нужно.`, `Dárek je pro vás rezervovaný. Náš operátor se vám brzy ozve. Nemusíte dělat nic dalšího.`],
        [`Продолжить чтение газеты`, `Pokračovat ve čtení novin`],
    ]

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
})()