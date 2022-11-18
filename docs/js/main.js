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


    

});


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