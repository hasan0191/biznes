$(document).ready(function(){

//wow
new WOW().init();

//Mixitup area

var container = document.querySelector('.gallery');
        var mixer = mixitup(container, {
          selectors:{
            control: '[our-mix-controll]'
          }
        });


//Owl Carousel area


  $(".owl-carousel").owlCarousel({
  	autoplay : true,
  	autoplayTimeout : 2000,
  	smartSpeed : 500,
  	loop : true,
  	responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
  });


//Active menu area
$('.navbar-nav li').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
});

//search box active
$('.searchbtn').click(function(){
    $('.input').focus().toggleClass('active-width').val('');
});


$('.navbar-nav a[href^="#"]').click(function(e){
  e.preventDefault();

    var target = this.hash;
    
    $('html, body').animate({
      scrollTop: $(target).offset().top - 75
    }, 500);

});


//Top arrow area

$('.top').click(function(){
    $('html, body').animate({
      scrollTop:0
    },1000);
});


$('.top').hide();

$(window).scroll(function(){
    var ourWindow = $(this).scrollTop();

    if(ourWindow<500){
        $('.top').fadeOut();
    }else{
      $('.top').fadeIn();
    }

    //menu fixed
    if (ourWindow>100) {
      $('body').addClass('fixed');
    }else{
      $('body').removeClass('fixed');
    }
});








}); //document.ready end