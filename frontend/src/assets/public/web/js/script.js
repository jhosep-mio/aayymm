/* SCROLL TOP 
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function() {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
});*/

/* GALLERY LOAD 
$(function () {
    $("#columns figure").slice(0, 6).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("#columns figure:hidden").slice(0, 6).slideDown();
        if ($("#columns figure:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});*/

/* MENU - FIXED */
var altura = ($('.navigation-allgs').offset() || { "top": NaN }).top;
$(window).on('scroll', function () {
    if ($(window).scrollTop() > altura) {
        $('.eonav-cntfluid').addClass('menu-fixed');
    } else {
        $('.eonav-cntfluid').removeClass('menu-fixed');
    }
});

/*ACCORDION PARA LA BARRA DE MENU*/
$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
            $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }   
    var accordion = new Accordion($('#accordion'), false);
});


/*GOOGLE MAPS
$('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
});

$(".maps").mouseleave(function () {
    $('.maps iframe').css("pointer-events", "none");
});*/

/* OWL CAROSUEL*/

$('.slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
});

$('.servorouse1').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
});

$('.producto1').owlCarousel({
    loop:true,
    margin:25,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
            items:4
        }
    },
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
});

$('.categorias_product').owlCarousel({
    loop:true,
    margin:25,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
            items:4
        }
    },
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
});

$('.test-monio1').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    },
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
});

$('.articles-1').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    },
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
});

/* --FACEBOOK -- */
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id))
        return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.8";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//TWITTER
!function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'twitter-wjs');