$(function(){

    $('.menu-btn').click(function(){
        $(this).toggleClass('active');
        $('.menu').slideToggle();
    });

    $(".see-projects-wrapper, .wrap").on("click","a", function (event) {
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

      $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
        $('.btn').css('opacity', '0');
        }
        else{
        $('.btn').css('opacity', '1');
        }
        });

        
        
        
    $('.load-more').click(function(){
      $('.portfolio').addClass('active');
      $(this).fadeOut();
    })

});


var postion = $('.portfolio').offset().top,
    height = $('.portfolio').height();
$(document).on('scroll', function (){
  var scroll = $(document).scrollTop();
  if(scroll  > postion && scroll ) {
     $('.social-fix').addClass('active');
     }else {
      $('.social-fix').removeClass('active');

     }
})

// gsap.config({ trialWarn: false });
// console.clear();
// gsap.registerPlugin(ScrollTrigger, SplitText);
// const split = new SplitText("p", { type: "lines" });

// split.lines.forEach((target) => {
//   gsap.to(target, {
//     backgroundPositionX: 0,
//     ease: "none",
//     scrollTrigger: {
//       trigger: target,
//       markers: true,
//       scrub: 1,
//       start: "top center",
//       end: "bottom center"
//     }
//   });
// });