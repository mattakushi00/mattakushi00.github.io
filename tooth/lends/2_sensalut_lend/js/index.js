$(document).ready(function(){
    $('.nav-burger').click(function() {
        $(this).parents('.header').toggleClass('active')
        $('html, body').toggleClass('hidden')
    })

    $('.commits__slide').owlCarousel({
        dots: false,
        nav: true,
        loop: true,
        // autoHeight:true,
        // autoplay: true,
        // autoplayTimeout: 3000,
        // autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
            },
            768 : {
                items: 2,
            }
        }
    });

    $('.nav__link, .section__next').on( 'click', function(){
        $('.header').removeClass('active')
        $('html, body').removeClass('hidden')
        $('.nav__link').removeClass('active')

        $(this).addClass('active')
        var el = $(this);
        var dest = el.attr('href'); // получаем направление
        if(dest !== undefined && dest !== '') { // проверяем существование
            $('html').animate({
                scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
            }, 500 // скорость прокрутки
            );
        }
        return false;
    });

    // Cache selectors
    let lastId,
    topMenu = $("#scroll__dots"),
    topMenuHeight = topMenu.outerHeight() + 140,
    // All list items
    menuItems = topMenu.find(".scroll__dot"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function() {
        let item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e) {
        let href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 500);
        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function() {
        // Get container scroll position
        let fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        let cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop)
            return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        let id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            menuItems.removeClass("active")
            menuItems.filter("[href='#"+id+"']").addClass("active")
            if(id === 'section3' || id === 'section4' || id === 'section9') {
                menuItems.parent().addClass('blue')
            } else {
                menuItems.parent().removeClass('blue')
            }
        }
    });

    AOS.init();

    Start();

    function Start() {
        var m = 12,
            s = 0;

        if (m <= 9) {
            m = "0" + m;
        };

        var timerId = setTimeout(function tick() {
            if (s != 0) {
                s = s - 1;

                if (s <= 9) {
                    s = "0" + s;
                }
            } else {
                if (m != 0) {
                    m = m - 1;
                    s = 59;

                    if (m <= 9) {
                        m = "0" + m;
                    }
                } else {
                    return
                }
            }

            $('.form__min span').text(m);
            $('.form__sec span').text(s);
            timerId = setTimeout(tick, 1000);
        }, 1000);
    };
})