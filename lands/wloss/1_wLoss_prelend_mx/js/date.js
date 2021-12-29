(function (post, sale, comment, footer) {
    var now = new Date(),
        weekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7),
        d = weekAgo.getDate(),
        m = weekAgo.getMonth() + 1,
        y = weekAgo.getFullYear();
    post[0].textContent = buildDate(d, m, y);
    if (sale[0]) {
        sale[0].textContent = buildDate(now.getDate(), now.getMonth() + 1, now.getFullYear())
    }
    for (var i = 0; i < footer.length; i++) {
        footer[i].textContent = now.getFullYear();
    }
    generateDate(comment, 0.8);

    function zero(val) {
        return val.toString().length === 1 ? '0' + val : val;
    }

    function buildDate(d, m, y) {
        return [zero(d), zero(m), y,].join('.');
    }

    function generateDate(array, num) {
        for (var i = 0; i < array.length; i++) {
            var newDate = new Date(weekAgo.getFullYear(), weekAgo.getMonth(), Math.round(weekAgo.getDate() + (i * num))),
                chooseDate = newDate < now ? newDate : now;
            array[i].textContent = buildDate(
                chooseDate.getDate(),
                chooseDate.getMonth() + 1,
                chooseDate.getFullYear())
        }
    }
})(
    document.getElementsByClassName('post-date'),
    document.getElementsByClassName('sale'),
    document.getElementsByClassName('comment-date'),
    document.getElementsByClassName('footer-date')
);
