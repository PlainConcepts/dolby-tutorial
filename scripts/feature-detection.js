var Dolby = Dolby || {};

(function (start) {
	'use strict';
	var video = document.createElement('video');

	if (video.canPlayType('audio/mp4;codecs="ec-3"') === '' || video.canPlayType('audio/mp4;codecs="ac-3"') === '') {
		Dolby.supportDDPlus = false;
		start();
	} else {
		var audio = new Audio();
		audio.muted = true;
		audio.addEventListener('error', function () {
			Dolby.supportDDPlus = false;
			start();
		}, false);
		audio.addEventListener('seeked', function () {
			Dolby.supportDDPlus = true;
			start();
		}, false);

		audio.addEventListener('canplaythrough', function () {
			try {
				audio.currentTime = 2;
			} catch (e) {
			}
		}, false);
		audio.src = '/assets/silence.mp4';
		audio.play();
	}
}(Dolby.init));