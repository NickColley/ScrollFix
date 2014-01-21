;(function(window, document){
	document.addEventListener('touchmove', function(e) {
		isScrollElement(e.target) || e.preventDefault();
	}, false);
	document.addEventListener('touchstart', function(e){
		var elem = isScrollElement(e.target);
		var startTopScroll = 0;
		if(elem) {
			startTopScroll = elem.scrollTop;
			if(startTopScroll <= 0) { elem.scrollTop = 1; }
			if(startTopScroll + elem.clientHeight >= elem.scrollHeight) {
				elem.scrollTop = elem.scrollHeight - elem.clientHeight - 1;
			}
		}
	}, false);
	function isScrollElement(element) {
		while(element) {
			if (
				(window.getComputedStyle(element).overflow === 'scroll' ||
				window.getComputedStyle(element)["overflow-y"] === 'scroll' ||
				window.getComputedStyle(element)["overflow-x"] === 'scroll') &&
				element.scrollHeight > element.clientHeight
				) {
				return element;
			}
			element = element.parentElement;
		}
		return false;
	}
})(window, document);
