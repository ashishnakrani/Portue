"use strict";

$(document).ready(function() {
  $(document).on('click', '.nav-link', function() {
    $('.navbar-indicator').css({width: '9rem'});
    let currentEle = $(this);
    let pos = currentEle.position().left;
    $('.navbar-indicator').css({opacity:1, left: pos});
    setTimeout(function() {
      $('.navbar-indicator').css({width: '7rem'});
    }, 100);
  });

  $(document).ready(function(){
  $(".testimonials").owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});
  });
});

$(document).on('click', '#nav-about-tab', function() {
  let skills = document.querySelectorAll('.item');
  let i;
  for (i = 1; i<=skills.length; i++) {
    let percentage = $('.skills__item'+i).attr('data-percentage');
    $('.skills__item'+i).find('small b').remove();
    $('.skills__item'+i).find('small br').remove();
    $('.skills__item'+i).find('small').prepend(`<b>${percentage}%</b><br>`);  
    $('.skills__item'+i).circleProgress({
      value: parseFloat(percentage/100),
      fill: {color: '#1D2B64'}
    });
  }
});