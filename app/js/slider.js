$(document).ready(function() {
	var viewport = $('.slider-viewport'),
		slider_cont = $('.slider-viewport__slide-cont'),
		slide = slider_cont.find('div').eq(0),
		offset = Number.parseInt(slide.css('width').slice(0,-2))+Number.parseInt(slide.css('margin-left').slice(0, -2)*2),
		pos = 0,
		count = 3;

	$(window).on('resize', function() {
		if(window.innerWidth <= 840) {
			count = 1;
		}
		else if(window.innerWidth <= 1510) {
			count = 2;
		} else {
			count = 3;
		}
		viewport.css('width', offset*count);
	});

	viewport.find('span').on('click', function() {
		switch($(this).index()) {
			case 1:
				if((pos + offset) <= slider_cont.width() - viewport.width()) {
					pos += offset;
				} else {
					pos = 0;
				}
				break;
			case 0:
				if((pos - offset) >= 0) {
					pos -= offset;
				} else {
					pos = slider_cont.width() - viewport.width();
				}
				break;
		}
		slider_cont.css('transform', 'translate(-'+pos+'px, 0)');
	});
});