;(function(window, document){
	document.addEventListener('touchmove', function(e) {
		isScrollElement(e.target) || e.preventDefault();
	}, false);
	document.addEventListener('touchstart', function(e){
		var elem = isScrollElement(e.target);
		if(elem) {
			var startTopScroll = elem.scrollTop;
			if(startTopScroll <= 0) { elem.scrollTop = 1; }
			if(startTopScroll + elem.offsetHeight >= elem.scrollHeight) {
				elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
			}
		}
	}, false);
	function isScrollElement(element) {
		while(element) {
			if (
				(window.getComputedStyle(element).overflow === 'scroll' ||
				window.getComputedStyle(element)["overflow-y"] === 'scroll' ||
				window.getComputedStyle(element)["overflow-x"] === 'scroll') &&
				element.scrollHeight > window.innerHeight
				) {
				return element;
			}
			element = element.parentElement;
		}
		return false;
	}
})(window, document);
