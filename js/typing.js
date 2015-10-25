
function typeText (p, text) {
	var t = 0
	toggleCursor();
	for (i=0; i<text.length; i++) {
		if (text[i-1] === ".") {
			window.setTimeout(toggleCursor, t);
			t += 400;
			window.setTimeout(toggleCursor, t);
		}
		else {
			t += 100;
		}
		window.setTimeout(typeLetter, t, p, text[i]);
	}
	window.setTimeout(toggleCursor, t);
}

function typeLetter (p, s) {
	p.html(p.text()+s);
	
}

function toggleCursor () {
	$("#lead-cursor").toggleClass();
}
