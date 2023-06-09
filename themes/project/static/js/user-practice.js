$(document).ready(function () {
    if ($(window).width() < 1000) {
        $('.stretch-img').each(function () {
            new RTP.PinchZoom($(this), {})
        })
        $('.isH5 .tool-detail')
            .find('.tool-item')
            .find('.item-title')
            .on('click', function () {
                $(this).siblings('.item-detail').toggleClass('hide')

                let url = $(this).find('img').attr('src')
                if (url.includes('right')) {
                    $(this).find('img').attr('src', '/img/swiper/down.svg')
                } else {
                    $(this).find('img').attr('src', '/img/swiper/right.svg')
                }
            })
    }

    function tabScroll(obj) {
        var menuListId = []
        obj.each(function () {
            menuListId.push($(this).find('a').attr('href'))
        }) 
        obj.on('click', function (e) {
            e.preventDefault()
            $(this).addClass('active').siblings().removeClass('active')
            let id = $(this).find('a').attr('href')

            menuListId.forEach((item, index) => {
                if (item === id) {
                    let h = $(id).offset().top - 60
                    window.scrollTo(0, h)
                }
            })
        })

        if ($(window).width() > 1000) {
            $(window).scroll(function () {
                var targetUrl = []
                try {
                    targetUrl = menuListId.filter(function (item) {
                        return $(window).scrollTop() + 80 > $(item).offset().top
                    })

                    if (targetUrl.length) {
                        obj.removeClass('active')
                            .eq(targetUrl.length - 1)
                            .addClass('active')
                    }
                } catch (error) {
                    console.log(error)
                }
            })
        }
    }

    var tools = $('.left-tools div')
    tabScroll(tools)
})
