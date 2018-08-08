
$(document).ready(function() {
	var menuItem = $('.left-column__menu__link'),
		burgerMenu = $('.toggle-menu__burger-btn'),
		isScrollChangeActive = true;

	(menuItem).on('click', function(e) {
		e.preventDefault();
		menuItem.removeClass('left-column__menu__link_state_active');
		$(this).toggleClass('left-column__menu__link_state_active');
		scrollToSection($(menuItem.eq($(this).index()).attr('href')), 1500,function(){isScrollChangeActive=true;});
	});

	$('.header__link-more').on('click', function() {
		scrollToSection($($(this).attr('href')), 2000, function(){isScrollChangeActive=true;});
	});

	$(window).on('scroll', function() {
		if(isScrollChangeActive) {
			var scroll = $(window).scrollTop();

			if(scroll < ($('.about').offset().top)/2) {
				toActivate(menuItem, 0);
			} 
			if(scroll >= ($('.about').offset().top)/2) {
				toActivate(menuItem, 1);
			} 
			if(scroll >= ($('.services').offset().top)/1.2) {
				toActivate(menuItem, 2);
			}
			if(scroll >= ($('.staff').offset().top)/1.2) {
				toActivate(menuItem, 3)
			}
		}
	});


	burgerMenu.on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('toggle-menu__burger-btn_state_active');
		$(this).next().toggleClass('toggle-menu__menu-wrapper_state_active');
	});

	function scrollToSection(elem, duration, endAnimateFunc) {
		isScrollChangeActive = false;
		var top = elem.offset().top;
		$('html, body').animate({scrollTop: top}, duration, endAnimateFunc);
	}

	function toActivate(element, index) {
		element.removeClass('left-column__menu__link_state_active');
		element.eq(index).toggleClass('left-column__menu__link_state_active');
	}

});