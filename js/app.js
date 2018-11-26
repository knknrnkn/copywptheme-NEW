$(document).ready(function() {

    // toogle btn
    $(".toggle-btn").click(function() {
        $(".nav").slideToggle("slow");
    });
    // slider showcase
    $(".slideshow > div:gt(0)").hide();
    setInterval(function() {
        $('.slideshow > div:first')
            .fadeOut(1000).next()
            .fadeIn(1000)
            .end()
            .appendTo('.slideshow');
    }, 7000);
    // cycle script test
    $('.stat').cycle({

        fx: 'scrollHorz',
        next: '.next',
        prev: '.prev',
        timeout: 3000

    });

    $('.slide1').css({ 'background-color': 'transparent' });
    // slider stat
    $('.next').click(function() {
        event.preventDefault();
        var currentSlide = $('.slide1.active');
        var nextSlide = currentSlide.next();

        currentSlide.fadeOut(100).removeClass('active');
        nextSlide.fadeIn(100).addClass('active');

        if (nextSlide.length == 0) {
            $('.slide1').first().fadeIn(100).addClass('active')
        }
    });
    $('.prev').click(function() {
        event.preventDefault();
        var currentSlide = $('.slide1.active');
        var prevSlide = currentSlide.prev();

        currentSlide.fadeOut(100).removeClass('active');
        prevSlide.fadeIn(100).addClass('active');

        if (prevSlide.length == 0) {
            $('.slide1').last().fadeIn(100).addClass('active');
        }
    });

    // flexslider
    // $('.flexslider').flexslider({
    //     animation: "slide1",
    //     rtl: true
    // });



});