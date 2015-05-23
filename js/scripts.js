jQuery(window).on("load", function() {
	"use strict";

});

jQuery(document).ready(function($) {
	"use strict";

	/* -----------------------------------------
	 Main Navigation Init
	 ----------------------------------------- */
	$('ul#navigation').superfish({
		delay:       300,
		cssArrows: false,
		animation:   { opacity:'show', height:'show' },
		speed:       'fast',
		dropShadows: false
	});

	/* -----------------------------------------
	 Homepage Fullscreen Slider Init
	 ----------------------------------------- */
	$(document).on('init.slides', function() {
		$('.loading-container').fadeOut(function() {
			$(this).remove();
		});
	});

	if ( $("#slides").length ) {
		$("#slides").superslides({
			animation: 'fade',
			play: 6000
		});
	}

	/* -----------------------------------------
	 Lightbox Init (Fancybox)
	 ----------------------------------------- */
	$(".fb").fancybox();

	/* -----------------------------------------
	 Google Map Init
	 ----------------------------------------- */
	initMap();

});

/* -----------------------------------------
 Google Map Function
 ----------------------------------------- */

function initMap() {
	'use strict';

	var myLatlng = new google.maps.LatLng(33.59,-80);
	var mapOptions = {
		zoom: 8,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}

	var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	var contentString = '<div id="content">Change it to whatever your want! <strong>HTML</strong> too!</div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: 'Hello'
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
}