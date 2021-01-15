(function ($) {
	"use strict";

	var nav = $('nav');
	var navHeight = nav.outerHeight();

	$('.navbar-toggler').on('click', function () {
		if (!$('#mainNav').hasClass('navbar-reduce')) {
			$('#mainNav').addClass('navbar-reduce');
		}
	});

	// Navbar Menu Reduce 
	$(window).trigger('scroll');

	//  Star ScrollTop
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	//  Star Scrolling nav
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 30)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});


	$('.back-to-top').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500, 'easeInOutExpo');
		return false;
	});

	//  Star Counter
	$('.counter-number').counterUp({
		delay: 15,
		time: 2000
	});


	//  Testimonials owl
	$('#testimonial-slide').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		nav: true,
		smartSpeed: 1000,
		navText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
		],
		dots: false,
		autoplayHoverPause: true,
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 1
			}
		}
	});

	//  Client owl
	$('.client-slide').owlCarousel({
		autoplay: true,
		autoplayTimeout: 4000,
		nav: false,
		smartSpeed: 1000,
		dots: false,
		autoplayHoverPause: true,
		loop: true,
		responsive: {
			0: {
				items: 2
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	});
	
	// About TYPED JS
      $(".element").typed({
        strings: ["Anastasiya", "Web Designer", "Web Developer"],
        typeSpeed: 8,
        loop:true,
        backDelay: 2000
      });


})(jQuery);

// === window scroll function === //
$(window).on('scroll', function () {
		// Back to top button 
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
		
		
		// Navbar Menu Reduce 
		var pixels = 50;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
});


// === window When Loading === //
$(window).on("load", function() {
    
    $('.loading_box').fadeOut(1000);
    $('.loading_view').addClass('load_hide').delay(1000).fadeOut(1000);

});

Splitting();
window.startanimate = function (params) {
  gsap.from('[data-scroll="in"] .char', .5, {
    stagger: {
      each: 0.04,
		},
		opacity: 0,
		y: 30,
  });
};
ScrollOut({
  threshold: 0.3,
  onShown: function (el) {
    // use the web animation API
    startanimate();
    el.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
  },
});

$('#contact_form').on('submit', function (e) {
	e.preventDefault();
	// Initiate Variables With Form Content
	var name = $("#name").val();
	var email = $("#email").val();
	var msg_subject = $("#subject").val();
	var message = $("#message").val();


	$.ajax({
		type: "POST",
		url: "php/form-process.php",
		data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message,
		success : function(text){
			if (text == "success"){
				alert('Message Submitted!')
			} else {
				alert('Sorry! Please try again after some time.');
			}
		}
	});
});
