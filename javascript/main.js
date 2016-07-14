// $("a[href*='" + location.pathname + "']").css("color", "#e6c52c");
$(document).ready(function() {
	$('.landing').animate({opacity: '1'}, 2500, function() {
		$('#enter').animate({opacity: '0.8'}, 1500);
	});

	$('body').animate({opacity: '1'}, 2500);

	slideshow(1);

});

var count = 1;
$(function slideshow(count) {
	if (count <= 4) {
		$('span.slide#img' + count).fadeIn(4000, function() {
			$('span.slide#img' + count).fadeOut(4000);
			count++;
			slideshow(count, 'span.slide#img' + count);
		});
		
	} else {
		count = 1;
		slideshow(count, 'span.slide#img' + count);
	}
});