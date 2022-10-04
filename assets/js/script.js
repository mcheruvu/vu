(function ($) {
	'use strict';


  // Fixed header
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 70) {
      $('.site-navigation,.trans-navigation').addClass('header-white');
    } else {
      $('.site-navigation,.trans-navigation').removeClass('header-white');
    }
  });
  

	// navbarDropdown
	if ($(window).width() < 992) {
		$('.navbar-collapse .dropdown-toggle').on('click', function () {
			$(this).siblings('.dropdown-menu').animate({
				height: 'toggle'
			}, 300);
		});
  }
  

  // counter
	function counter() {
		var oTop;
		if ($('.counter').length !== 0) {
			oTop = $('.counter').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.counter').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 500,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
  }
  $(window).on('scroll', function () {
		counter();
	});


	// Smooth Scroll
	$('a.nav-link').click(function (e) {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				e.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function () {
					var $target = $(target);
					$target.focus();
					if ($target.is(':focus')) {
						return false;
					} else {
						$target.attr('tabindex', '-1');
						$target.focus();
					}
				});
			}
		}
	});
	$('.navbar-collapse .navbar-nav a').on('click', function () {
		$('.navbar-toggler:visible').click();
	});


	// The function actually applying the offset
function offsetAnchor() {
	if (location.hash.length) {
	  window.scrollTo(window.scrollX, window.scrollY - 200);
	}
  }
  
  // Captures click events of all <a> elements with href starting with #
  $(document).on('click', 'a[href^="#"]', function(event) {
	// Click events are captured before hashchanges. Timeout
	// causes offsetAnchor to be called after the page jump.
	window.setTimeout(function() {
	  offsetAnchor();
	}, 0);
  });
  
  // Set the offset when entering page with hash present in the url
  window.setTimeout(offsetAnchor, 0);

  if (document.location.hash) {
	setTimeout(function() {
		window.scrollTo(window.scrollX, window.scrollY - 200);
	}, 10);
}

})(jQuery);