$(document).ready(function() {
	var menuItem = $('.left-column__menu__link');

	menuItem.on('click', function(e) {
		e.preventDefault();
		menuItem.removeClass('left-column__menu__link_state_active');
		$(this).toggleClass('left-column__menu__link_state_active');
	});

});