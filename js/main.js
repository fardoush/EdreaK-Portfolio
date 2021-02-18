/*
|--------------------------------------------------------------------------
	COLOR SCHEME
|--------------------------------------------------------------------------
*/

const styleToggler = document.querySelector(".style-toggler");
styleToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

//hide style-switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open")
    }
});

//Theme Background color
function lightFunction() {
    $('.about-section').css("background-color", "#ffffff");
    $('.service-section').css("background-color", "#f9f9f9");
    $('.portfolio-section').css("background-color", "#ffffff");
    $('.team-section').css("background-color", "#f9f9f9");
    $('.price-section').css("background-color", "#ffffff");
    $('.news-section').css("background-color", "#f9f9f9");
    $('.contact-section').css("background-color", "#ffffff");
    $('.service-box,.team-box,.post-box').css("background-color", "#fff");
    $('.price-item').css("background-color", "#fff");
    $('strong,.color-light').css("color", "#fff");
    $('label,.port-link,.profile-info').css("color", "#222");
    $('h3,h5,.color-dark,.light-icon,.read').css("color", "#000000");

}

function darkFunction() {

    $('.about-section').css("background-color", "#111111");
    $('.service-section').css("background-color", "#000000");
    $('.portfolio-section').css("background-color", "#111111");
    $('.team-section').css("background-color", "#000000");
    $('.price-section').css("background-color", "#111111");
    $('.news-section').css("background-color", "#000000");
    $('.contact-section').css("background-color", "#111111");
    $('.service-box,.team-box,.post-box').css("background-color", "#111111");
    $('.price-item').css("background-color", "#000");
    $('p,span,label,a,.profile-info').css("color", "#f9f9f9");
    $('h1,h2,h3,h4,h5,h6').css("color", "#fff");

}

// color
$(document).ready(function() {

    $('.themes-btn ').click(function() {

        $('.colors, span').toggleClass('active');

    });

    // text-color 
    $('ul.text-colors li').click(function() {

        $('.color-scheme,.color, .quote ,.active,.typewrite,.read,.soci-link1,.soci-link2,.soci-link3,.soci-link4,.f,.in,.p,.t').css('color', $(this).css('color'));

        $('.btn,.btn-clr,.team-info,.icon-bg,#myBtn').css('background-color', $(this).css('color'));

    });
});

/*
|--------------------------------------------------------------------------
	 NAVBAR SCROLL
|--------------------------------------------------------------------------
*/

$(function() {
    var navbar = $('.header-inner');
    $(window).scroll(function() {
        if ($(window).scrollTop() <= 40) {
            navbar.removeClass('navbar-scroll');
        } else {
            navbar.addClass('navbar-scroll');
        }
    });

    //toggle menu/navbar script
    $('.navbar-toggler').click(function() {
        $('.navbar-nav').toggleClass("active");
        $('.navbar-toggler i').toggleClass("active");

    });
});

/*
|--------------------------------------------------------------------------
	SMOOTH SCROLL
|--------------------------------------------------------------------------
*/
$(document).on('click', 'a[href*="#"]:not([href="#"])', function(event) {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        var topBar_height = $('.TopBar').outerHeight() - 3;
        if (!topBar_height)
            topBar_height = 0;

        var header_height = 50 + topBar_height;

        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - header_height
            }, 1000);
            return false;
        }
    }
});

/*
|--------------------------------------------------------------------------
	TEXT TYPE TEXT
|--------------------------------------------------------------------------
*/
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff;}";
    document.body.appendChild(css);
};


/*
|--------------------------------------------------------------------------
	Counter
|--------------------------------------------------------------------------
*/


$(".counter").counterUp({
    delay: 10,
    time: 1000,

});

/*
|--------------------------------------------------------------------------
	Portfolio Isotop
|--------------------------------------------------------------------------
*/
(function() {

    'use strict';


    var $gallary = $('.gallary');

    $gallary.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filters > li').on('click', function(e) {

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $gallary.isotope({ filter: filter });

    });

    $('.gallary-box').mouseenter(function() {

        $(this).find('.gallary-img').css({ 'top': '-100%' });
        $(this).find('.overly-content').css({ 'top': '0' });

    }).mouseleave(function() {

        $(this).find('.gallary-img').css({ 'top': '0' });
        $(this).find('.overly-content').css({ 'top': '100%' });

    });

})(jQuery);

/*
|--------------------------------------------------------------------------
	owl carousel
|--------------------------------------------------------------------------
*/

var owl = $('#test-carousel');
owl.owlCarousel({
    autoplay: true,
    loop: true,
    nav: false,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        960: {
            items: 2
        },
        1200: {
            items: 2
        }
    }
});


/*
|--------------------------------------------------------------------------
	Window scroll button
|--------------------------------------------------------------------------
*/
// <!-- get the btn -->

mybutton = document.getElementById("myBtn");
window.scroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";

    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}