"use stric";

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
});