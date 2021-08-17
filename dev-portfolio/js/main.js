$(document).ready(function () {
    $(".nav-item a").click(function (e) {
        e.preventDefault();
        val = $(this).attr("href");
        $("html, body").animate(
            {
                scrollTop: $(val).offset().top,
            },
            2000
        );
    });

    $(".project img").slice(0, 6).css("display", "flex");
    $(".load-more").click(function (e) {
        e.preventDefault();
        $(".project:hidden")
            .slice(0, 3)
            .slideDown({
                start: function () {
                    $(this).css("display", "flex");
                },
            });
        if ($(".project:hidden").length == 0) {
            $(".load-more").fadeOut();
        }
        $("html, body").animate(
            {
                scrollTop: $(this).offset().top,
            },
            1500
        );
    });

    $(".btn").click(function (e) {
        e.preventDefault();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });

    $(".btn:nth-child(1)").click(function (e) {
        e.preventDefault();
        if ($(window).width() <= 480) {
            $("#slide:nth-child(1)").css("display", "block");
        } else {
            $("#slide:nth-child(1)").css("display", "flex");
        }
        $("#slide:nth-child(2), #slide:nth-child(3)").css("display", "none");
    });
    $(".btn:nth-child(2)").click(function (e) {
        e.preventDefault();
        $("#slide:nth-child(1), #slide:nth-child(3)").css("display", "none");
        if ($(window).width() <= 480) {
            $("#slide:nth-child(2)").css("display", "block");
        } else {
            $("#slide:nth-child(2)").css("display", "flex");
        }
    });
    $(".btn:nth-child(3)").click(function (e) {
        e.preventDefault();
        $("#slide:nth-child(1), #slide:nth-child(2)").css("display", "none");
        if ($(window).width() <= 480) {
            $("#slide:nth-child(3)").css("display", "block");
        } else {
            $("#slide:nth-child(3)").css("display", "flex");
        }
    });

    $("a[href='#back-to-top']").on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 850);
        return false
    });

    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 200) {
            $(".scroll-to-top").addClass("show");
            $('.tabbar').css("display", "flex");
        } else {
            $(".scroll-to-top").removeClass("show");
            $(".tabbar").css("display", "none");
        }
    });

    if ($(window).width() <= 480) {
        $('.load-more').click(function (e) { 
            e.preventDefault();
            $('.project').css('display', 'block');
        });
    }

    AOS.init();
});
