$(".burger-icon").click(function () {
    $(".depth1").addClass("on");
});
if (matchMedia("screen and (min-width: 769px)").matches) {
    window.onload = function () {
        var elm = ".box";
        $(elm).each(function (index) {
            $(this).on("mousewheel DOMMouseScroll", function (e) {
                e.preventDefault();
                var delta = 0;
                if (!event) event = window.event;
                if (event.wheelDelta) {
                    delta = event.wheelDelta / 120;
                    if (window.opera) delta = -delta;
                } else if (event.detail)
                    delta = -event.detail / 3;
                var moveTop = $(window).scrollTop();
                var elmSelecter = $(elm).eq(index);
                if (delta < 0) {
                    if ($(elmSelecter).next() != undefined) {
                        try {
                            moveTop = $(elmSelecter).next().offset().top;
                        } catch (e) {}
                    }
                } else {
                    if ($(elmSelecter).prev() != undefined) {
                        try {
                            moveTop = $(elmSelecter).prev().offset().top;
                        } catch (e) {}
                    }
                }
                $("html,body").stop().animate({
                    scrollTop: moveTop + 'px'
                }, {
                    duration: 800,
                    complete: function () {}
                });
            });
        });
    }
}