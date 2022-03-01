$(function () {
    $('.button').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
})
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.button').fadeIn();
    }
    else {
        $('.button').fadeOut();
    }
});