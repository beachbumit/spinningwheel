function wheelGame() {
	var stop;
	var next;
	var first = $('#one');
	var circles = ['one', 'two', 'three', 'four', 
					'five', 'six', 'eight', 'nine', 
					'ten', 'eleven', 'twelve', 'thirteen', 
					'fourteen', 'fifteen', 'sixteen', 'seventeen', 
					'nineteen', 'twenty', 'twentyone', 'twentytwo'];
	
	this.startGame = function(li) {
		
	}

	var spinning = function(li) {
		li.next().css('color', 'red').css('border', '1px solid red');
	}

	var clear = function(li) {
		li.css('color', 'black').css('border', '1px solid black');
	}

	this.stopInterval = function() {
		clearInterval(stop);
	}
}
