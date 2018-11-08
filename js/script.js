$(function(){
	var $laptop = $('.laptop');
	var $ourServices = $('.our-services');
	var $motto = $('.motto');
	var $check = $('.check');
	var $additional = $('.additional');
	var $became = $('.became');
	var $gallery = $('.gallery');
	var $show = $('.show');

	$laptop.fadeOut();
	$ourServices.fadeOut();
	$motto.fadeOut();
	$check.fadeOut();
	$additional.fadeOut();
	$became.fadeOut();
	$gallery.fadeOut();
	$show.fadeOut();

	window.onscroll = function() {showOff()};

	function showOff() {
    	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        	$laptop.fadeIn();
        }
		
		if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        	$ourServices.fadeIn();
        }

        if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
        	$motto.fadeIn();
        }

        if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        	$check.fadeIn();
        }

        if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
        	$additional.fadeIn();
        }

        if (document.body.scrollTop > 3200 || document.documentElement.scrollTop > 3200) {
        	$became.fadeIn();
        }

        if (document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4000) {
        	$gallery.fadeIn();
        }

        if (document.body.scrollTop > 4800 || document.documentElement.scrollTop > 4800) {
        	$show.fadeIn();
        }
	}
});