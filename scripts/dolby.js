var Dolby = Dolby || {};

(function () {
	'use strict';

	Dolby.init = function () {
		var title = document.getElementById('video-title');
		var videoContainer = document.getElementById('video-container');

		if (!Dolby.supportDDPlus) {
			title.textContent = 'Dolby Unsupported';
			videoContainer.style.display = 'none';
		} else {
			title.textContent = 'Dolby Supported'
		}
	}
}());