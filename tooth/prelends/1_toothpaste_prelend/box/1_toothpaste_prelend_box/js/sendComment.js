(() => {
    const $btn = document.querySelector('.comment__btn')
    const $name = document.querySelector('.comment__input-name')
    const $text = document.querySelector('.comment__input-text')
    const $inputBlock = document.querySelector('.comment__send')
    const $newCommentBlock = document.querySelector('.comment__new')
    const $adminText = document.querySelector('.comment__admin')
    const newName = document.querySelector('.comment-name_new')
    const newText = document.querySelector('.comment-text_new')
    const key = `commentOn${window.location.pathname}`

    if (!localStorage.getItem(key)) {
        $btn.addEventListener('click', e => {
            e.preventDefault()
            localStorage.setItem(key, 'true')

            $inputBlock.style.display = 'none'
            $newCommentBlock.style.display = 'flex'
            $adminText.style.display = 'block'
            newName.textContent = $name.value
            newText.textContent = $text.value
        })
    } else {
        $inputBlock.style.display = 'none'
        $adminText.style.display = 'block'
    }

})()
