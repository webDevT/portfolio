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

    jQuery(function($){
        $(document).mouseup(function (e){ 
          var div = $("body"); 
          var div2 = $(".menu");
          var div3 = $(".menu-btn");
          if (!div.is(e.target) 
              && div2.has(e.target).length === 0  && div3.has(e.target).length === 0 )  {
            div2.slideUp();
            div3.removeClass('active')
          }
        });
      });


      const btnPlay = document.querySelector('.btn-play');
// const btnStop = document.querySelector('.btn-stop');
const wrapperVideo = document.getElementById('video');

btnPlay.addEventListener('click',function(){
  wrapperVideo.play();
});

// btnStop.addEventListener('click',function(){
//   wrapperVideo.pause();
// });
    

});