(function () {
    const now = new Date();
    const weekAgo = new Date();
    const daysAgo = 7

    weekAgo.setDate(weekAgo.getDate() - daysAgo)

    writeDate('.post-date', weekAgo.toLocaleDateString())
    writeDate('.sale', now.toLocaleDateString())
    writeDate('.footer-date', now.getFullYear())
    writeCommentDate('.comment-date')

    function writeCommentDate(classOfCommentsArray) {
        if (!document.querySelectorAll(classOfCommentsArray)) return

        const commentsStep = (daysAgo + 1) / document.querySelectorAll(classOfCommentsArray).length

        document.querySelectorAll(classOfCommentsArray).forEach((item, index) => {
            const commentDate = new Date()

            commentDate.setMonth(weekAgo.getMonth())
            commentDate.setDate(Math.round(weekAgo.getDate() + (index * commentsStep)))
            item.textContent = commentDate < now ? commentDate.toLocaleDateString() : now.toLocaleDateString()
        })
    }

    function writeDate(classOfDomElement, dateTime) {
        if (!document.querySelectorAll(classOfDomElement)) return
        document.querySelectorAll(classOfDomElement).forEach((item) => item.textContent = dateTime)
    }

})();