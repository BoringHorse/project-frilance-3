$(document).ready(function() {
	var menuItem = $('.left-column__menu__link'),
		burgerMenu = $('.toggle-menu__burger-btn');

	$(window).on('scroll', function() {
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
	});

	menuItem.on('click', function(e) {
		e.preventDefault();
		menuItem.removeClass('left-column__menu__link_state_active');
		$(this).toggleClass('left-column__menu__link_state_active');
		var id = $(this).attr('id');
		$('html, body').animate({scrollTop: $(id).offset().top}, 1500);
	});

	burgerMenu.on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('toggle-menu__burger-btn_state_active');
		$(this).next().toggleClass('toggle-menu__menu-wrapper_state_active');
	});

});

function toActivate(element, index) {
	element.removeClass('left-column__menu__link_state_active');
	element.eq(index).toggleClass('left-column__menu__link_state_active');
}