(function (today, post, sale, comment, footer) {
    var now = new Date()
    var diffDay = targetDay()
    var postDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - diffDay)
    var d = postDate.getDate()
    var m = postDate.getMonth() + 1
    var y = postDate.getFullYear();

    post[0].textContent = buildDate(d, m, y);
    if (today[0]) {
        today[0].textContent = buildDate(now.getDate(), now.getMonth() + 1, now.getFullYear())
    }
    if (sale[0]) {
        sale[0].textContent = buildDate(now.getDate(), now.getMonth() + 1, now.getFullYear())
    }
    footer[0].textContent = now.getFullYear();

    generateDate(comment, 0.8);

    function zero(val) {
        return val.toString().length === 1 ? '0' + val : val;
    }

    function buildDate(d, m, y) {
        return [zero(d), zero(m), y,].join('.');
    }

    /*change post date in blogs*/
    function targetDay() {
        if (window.location.pathname.includes('blog1')) {
            return 10
        }
        if (window.location.pathname.includes('blog2')) {
            return 11
        }
        if (window.location.pathname.includes('blog3')) {
            return 9
        }
        return 7
    }

    function generateDate(array, num) {
        for (var i = 0; i < array.length; i++) {
            var newDate = new Date(postDate.getFullYear(), postDate.getMonth(), Math.round(postDate.getDate() + (i * num))),
                chooseDate = newDate < now ? newDate : now;
            array[i].textContent = buildDate(
                chooseDate.getDate(),
                chooseDate.getMonth() + 1,
                chooseDate.getFullYear())
        }
    }
})(
    document.getElementsByClassName('today'),
    document.getElementsByClassName('post-date'),
    document.getElementsByClassName('sale'),
    document.getElementsByClassName('comment-date'),
    document.getElementsByClassName('footer-date')
);
