// Scrolling animations
$('.link').click(function() {
	$('html, body').animate({
		scrollTop: $('#' + $(this).data('scrolltarget')).offset().top
	}, 500);
});

// Background parallax
$(window).scroll(function() {
	var speed = 2.0;
	$('.content').css('backgroundPosition', ((-window.pageXOffset / speed) + "px " + (-window.pageYOffset / speed) + "px"));
});

$('.portfolioitem > img').hover(function() {
	$(this).animate({
		borderRadius: '20px'
	}, 200);
	$(this).parent().animate({
		borderTopLeftRadius: '20px',
		borderBottomLeftRadius: '20px'
	}, 200);
}, function() {
	$(this).animate({
		borderRadius: '300px'
	}, 200);
	$(this).parent().animate({
		borderTopLeftRadius: '300px',
		borderBottomLeftRadius: '300px'
	}, 200);

});