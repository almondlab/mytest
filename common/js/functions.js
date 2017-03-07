/* --------------------------------------------------------------------------------
misc
-------------------------------------------------------------------------------- */

function setScrollToAnchor() {
	var time = 1000;
	$("a[href*='#']").on("click", function() {
		var target = $(this.hash);
		if (target.length > 0) {
			var offset = target.offset().top;
			if (offset > $(document).height()-$(window).height()) {
				offset = $(document).height()-$(window).height();
			}
			$("html, body").animate({scrollTop:offset}, {duration:time, easing:"easeOutQuint"});
			return false;
		}
	});
}

function getParams() {
	var params = new Array();
	if (location.search) {
		var requests = location.search.substring(1).split("&");
		for (var i in requests) {
			var items = requests[i].split("=");
			params[items[0]] = items[1];
		}
	}
	return params;
}

function loadImage(array) {
	$.each(array, function(index, value) {
		var image = new Image();
		image.src = value;
	});
}
