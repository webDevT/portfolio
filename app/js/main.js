$(function(){

    $('.menu-btn').click(function(){
        $(this).toggleClass('active');
        $('.menu').slideToggle();
    });

    $(".see-projects-wrapper").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);

    });
   
    $('.portfolio__item').click(function(){
        $(this).toggleClass('active');
        $('.portfolio__item').not(this).removeClass('active');
    })

    

});