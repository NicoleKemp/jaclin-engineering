$(function(){
    AOS.init();

    $('body').scrollspy({ target: '#bs-example-navbar-collapse-1' });

    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 60
            }, 1000);
        }
    });
});
