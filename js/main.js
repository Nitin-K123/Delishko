$(document).ready(function(){
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items: 3,
    autoplat:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        767:{
            items:2,
            
        },
        1000:{
            items:3,
            
            loop:true
        }
    }
  });
  
  // Custom Button
  $('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
  });
  $('.customPreviousBtn').click(function() {
    owl.trigger('prev.owl.carousel');
  });
  
 $('.carousel').carousel({
  interval: 5000
})
 // wow init
    new WOW().init();
  
});