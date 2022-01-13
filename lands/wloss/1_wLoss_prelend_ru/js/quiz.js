(function () {
    const form = document.querySelector('.quiz__form')
    const inputHeight = document.querySelector('input[name="height"]')
    const inputWeight = document.querySelector('input[name="weight"]')
    const inputWishfulWeight = document.querySelector('input[name="wishfulWeight"]')
    const result = document.querySelector('.quiz__result')
    const status = document.querySelector('.quiz__status')
    let isValidate = new Map()

    document.querySelectorAll('.quiz__input').forEach(item => {
        isValidate.set(item.getAttribute('name'), {isFill: false, isCorrect: false})
    })


    document.querySelectorAll('.quiz__input').forEach(item => {
        item.addEventListener('input', e => {

            /*validate*/
            if (e.target.value.length === 0) {
                e.target.classList.remove('input__success')
                e.target.classList.remove('input__error')

                isValidate.set(e.target.getAttribute('name'), {isFill: false, isCorrect: false})
                return;
            }

            if (!Number(e.target.value)) {
                e.target.classList.remove('input__success')
                e.target.classList.add('input__error')

                isValidate.set(e.target.getAttribute('name'), {isFill: true, isCorrect: false})
                return
            }

            e.target.classList.remove('input__error')
            e.target.classList.add('input__success')

            isValidate.set(e.target.getAttribute('name'), {isFill: true, isCorrect: true})
        })
    })

    form.addEventListener('input', () => {
        let validateFlag = false
        let imt = inputWeight.value / Math.pow(inputHeight.value / 100, 2)
        const lowBorder = 16
        const topBorder = 40

        isValidate.forEach(item => {
            if (item.isFill && item.isCorrect) {
                validateFlag = true
                return
            }
            validateFlag = false
        })

        if (!validateFlag) {
            result.textContent = 'неверно заполнено или заполнено не все'
            result.classList.add('text__error')
            status.style.display = 'block'
            return
        }

        status.style.display = 'none'
        result.classList.remove('text__error')

        /*calculate imt*/
        if (imt <= lowBorder) {
            result.textContent = `Выраженный дефицит массы тела, вам не нужно худеть.`
        }

        if (imt > lowBorder && imt < 18.49) {
            result.textContent = `Недостаточная масса тела, вам не нужно худеть.`
        }

        if (imt > 18.5 && imt < 22.99) {
            result.textContent = `У вас нормальная масса тела.`
        }

        if (imt > 23 && imt < 29.99) {
            result.textContent = `У вас избыточная масса тела (предожирение).\n Похудение с помощью физических тренировок: 187 дней. \n Минусы: велика вероятность пропуска тренировок. \n Похудение с помощью диет: 156 дней. \n Минусы: велика вероятность срыва. \n Похудение с помощью метода Алексея Смирнова: курс 60 дней. `
        }

        if (imt > 30 && imt < 34.99) {
            result.textContent = `У вас ожирение первой степени.\n Похудение с помощью физических тренировок: 267 дней.\n Минусы: велика вероятность пропуска тренировок.\n Похудение с помощью диет: 198 дней.\n Минусы: велика вероятность срыва.\n Похудение с помощью метода Алексея Смирнова: курс 80 дней. `
        }

        if (imt > 35 && imt < 39.99) {
            result.textContent = `У вас ожирение второй степени.\n Похудение с помощью физических тренировок: 369 дней.\n Минусы: велика вероятность пропуска тренировок.\n Похудение с помощью диет: 278 дней.\n Минусы: велика вероятность срыва.\n Похудение с помощью метода Алексея Смирнова: курс 100 дней. `
        }

        if (imt >= topBorder) {
            result.textContent = `У вас ожирение третьей степени (морбидное).\n Похудение с помощью физических тренировок: 489 дней.\n Минусы: велика вероятность пропуска тренировок.\n Похудение с помощью диет: 397 дней.\n Минусы: велика вероятность срыва.\n Похудение с помощью метода Алексея Смирнова: курс 150 дней. `
        }

    })

})()