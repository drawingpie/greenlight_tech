$(function() {
	$('#mobile_nav_wrapper').click(function() {
		$('.sliding_navbar').toggleClass('sliding_navbar--open');
		$('#hamburger_menu').toggleClass('open');
	});

	$('.navbar_item').click(function() {
		$('.sliding_navbar').toggleClass('sliding_navbar--open');
		$('#hamburger_menu').toggleClass('open');
	})
});