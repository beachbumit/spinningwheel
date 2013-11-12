function wheelGame() {
	var stop;
	var i = 0;
	var score = [];
	var list = $('#circles').children();
	this.total = 0;

	this.startWheel = function() {
		stop = setInterval(function() {
			$(list[i]).css('color', 'black').css('border', '2px solid black').attr('data-win', 'none');

			// Change previous circle back to black
			setTimeout(function() {
				$(list[i]).css('color', 'red').css('border', '2px solid red').css('font-weight', 'bold').attr('data-win', 'win');
			}, 5);
			i++;

			// Reset loop
			if (i == list.length) {
				i = 0;
			}
		}, 40);
	}

	this.stopWheel = function() {
		clearInterval(stop);
	}

	// Take care of undefined number problem
	this.checkScore = function() {
		if ($('#circles').find("li[data-win=win]").attr('data-score') == undefined) {
			return true;
		} else {
			return false;
		}
	}

	this.getScore = function() {
		this.total = 0;
		score.push($('#circles').find("li[data-win=win]").attr('data-score'));

		// Check if past 5th turn
		if(score.length > 5) {
			var last = score.pop();
			score = [];
			score.push(last);
		}

		// Add numbers in array and return total
		for(var i=0; i<score.length; i+=1) {
			this.total += parseInt(score[i]);
		}
		return this.total
	}

	// Check if 5th turn
	this.checkTries = function() {
		if(score.length == 5) {
			return this.total;
		} else {
			return false;
		}
	}

}
