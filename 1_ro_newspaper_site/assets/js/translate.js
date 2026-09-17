(()=> {
    const translate = [
        [`Выберите газету и получите`, `Alegeți un ziar și primiți`],
        [`подарок`, `UN CADOU`],
        [`75 €`, `300 LEI`],
        [`на продукты для здоровья`, `pentru produse destinate sănătății`],
        [`После открытия газеты наш оператор свяжется с вами в ближайшее время`, `După ce deschideți ziarul, operatorul nostru vă va contacta în curând`],
        [`Подарок закрепится за вами`, `Cadoul va fi rezervat pentru dumneavoastră`],
        [`Просто выберите, что вам ближе`, `Alegeți pur și simplu ce vi se potrivește mai bine`],
        [`Какая тема вам интереснее?`, `Ce subiect vă interesează cel mai mult?`],
        [`Открыть и получить подарок`, `Deschideți și primiți cadoul`],
        [`Ваш`, `Cadoul`],
        [`подарок`, `dumneavoastră`],
        [`уже ждет вас!`, `vă așteaptă deja!`],
        [`Ваш подарок получен!`, `Cadoul este deja al dumneavoastră!`],
        [`Вы открыли газету`, `Ați deschis ziarul`],
        [`«Жизнь в гармонии»`, `„Viață în armonie”`],
        [`«Новости науки»`, `„Știri științifice”`],
        [`«Разговор с терапевтом»`, `„Conversație cu medicul”`],
        [`Подарок закреплён за вами. Наш оператор свяжется с вами в ближайшее время. Ничего дополнительно делать не нужно.`, `Cadoul a fost rezervat pentru dumneavoastră. Operatorul nostru vă va contacta în curând. Nu trebuie să mai faceți nimic.`],
        [`Продолжить чтение газеты`, `Continuați să citiți ziarul`],
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