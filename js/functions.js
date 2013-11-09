function wheelGame() {
	var stop;
	var first = $('#one');
	var circles = ['one', 'two', 'three', 'four', 
					'five', 'six', 'eight', 'nine', 
					'ten', 'eleven', 'twelve', 'thirteen', 
					'fourteen', 'fifteen', 'sixteen', 'seventeen', 
					'nineteen', 'twenty', 'twentyone', 'twentytwo'];
	this.startGame = function() {
		stop = setInterval(spinning, 100);
	}

	var spinning = function() {
		var random = circles[]
		first.css('color', 'rgb(255, 0, 0)');
	}

	this.stopInterval = function() {
		clearInterval(stop);
	}
}
