sendMessage('send-message', 'commits__add-btn', 'commits__field-name', 'commits__field-message', 'commits__sucses');
function sendMessage(classForm, classButton, classInput, classTextarea, $sucses) {
    classInput = $('.' + classInput);
    classTextarea = $('.' + classTextarea);
    sucses = $('.' + $sucses);
    $('.' + $sucses).hide();

    $('.' + classButton).click(function () {
        if (classInput.length) {
            if (classInput.val() == '') {
                classInput.css('outline', '1px solid red');
                if (classTextarea.length) {
                    if (classTextarea.val() == '') {
                        classTextarea.css('outline', '1px solid red');
                    } else {
                        classTextarea.css('outline', '1px solid green');
                    }
                }
            } else {
                classInput.css('outline', '1px solid green');
                if (classTextarea.length) {
                    if (classTextarea.val() == '') {
                        classTextarea.css('outline', '1px solid red');
                    } else {
                        classTextarea.css('outline', '1px solid green');
                        $('.' + classForm).hide();
                        $('.' + $sucses).fadeIn();
                    }
                } else {
                    $('.' + classForm).hide();
                    $('.' + $sucses).fadeIn();
                }
            }
        }
    })
}