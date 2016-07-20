$(document).ready(function () {


    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $('.3dmascroll').click(function () {
        $("html, body").animate({
            scrollTop: $('.3dma').offset().top
        }, 600);
        return false;
    });

    $('.essayscroll').click(function () {
        $("html, body").animate({
            scrollTop: $('.essay').offset().top
        }, 600);
        return false;
    });

    $('.videoscroll').click(function () {
        $("html, body").animate({
            scrollTop: $('.video').offset().top
        }, 600);
        return false;
    });

    $('.2dscroll').click(function () {
        $("html, body").animate({
            scrollTop: $('.2d').offset().top
        }, 600);
        return false;
    });

});

