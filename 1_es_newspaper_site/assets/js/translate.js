(()=> {
    const translate = [
        [`Выберите газету и получите`, `Elija un periódico y reciba`],
        [`подарок`, `UN REGALO`],
        [`75 €`, `85 €`],
        [`на продукты для здоровья`, `en productos para la salud`],
        [`После открытия газеты наш оператор свяжется с вами в ближайшее время`, `Una vez abierto el periódico, nuestro operador se pondrá en contacto con usted en breve`],
        [`Подарок закрепится за вами`, `El regalo quedará reservado para usted`],
        [`Просто выберите, что вам ближе`, `Solo tiene que elegir lo que más le interese`],
        [`Какая тема вам интереснее?`, `¿Qué tema le interesa más?`],
        [`Открыть и получить подарок`, `Abrir y recibir el regalo`],
        [`Ваш`, `¡Su`],
        [`подарок`, `regalo`],
        [`уже ждет вас!`, `ya le está esperando!`],
        [`Ваш подарок получен!`, `¡Su regalo ya es suyo!`],
        [`Вы открыли газету`, `Ha abierto el periódico`],
        [`«Жизнь в гармонии»`, `«Vida en armonía»`],
        [`«Новости науки»`, `«Noticias científicas»`],
        [`«Разговор с терапевтом»`, `«Conversación con el médico»`],
        [`Подарок закреплён за вами. Наш оператор свяжется с вами в ближайшее время. Ничего дополнительно делать не нужно.`, `El regalo ha quedado reservado para usted. Nuestro operador se pondrá en contacto con usted en breve. No tiene que hacer nada más.`],
        [`Продолжить чтение газеты`, `Seguir leyendo el periódico`],
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