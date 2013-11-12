function wheelGame() {
	var stop;
	var i = 0;
	var score = [];
	var total = 0;

	this.startWheel = function(difficulty) {
		var list = $('#circles').children();
		var time = 0;
		switch (difficulty) {
			case 'easy':
				time = 25;
				break;
			case 'hard':
				time = 15;
				break;
			case 'insane':
				time = 9;
				break;
		}
		stop = setInterval(function() {
			list[i].className = 'black';
			list[i].setAttribute('data-win', 'no');

			// Change previous circle back to black
			setTimeout(function() {
				list[i].className = 'red';
				list[i].setAttribute('data-win', 'win');
			}, 1);
			i++;

			// Reset loop
			if (i == list.length) {
				i = 0;
			}
		}, time);
	}

	this.stopWheel = function() {
		clearInterval(stop);
	}

	// Take care of NaN problem
	this.checkScore = function() {
		if ($('#circles').find("li[data-win=win]").attr('data-score') == undefined) {
			return true;
		} else {
			return false;
		}
	}

	this.getScore = function() {
		total = 0; 
		score.push($('#circles').find("li[data-win=win]").attr('data-score'));

		// Check if past 5th turn
		if(score.length > 5) {
			var last = score.pop();
			score = [];
			score.push(last);
		}

		// Add numbers in array and return total
		for(var i=0; i<score.length; i+=1) {
			total += parseInt(score[i]); 
		}
		return total 
	}

	// Check if 5th turn
	this.checkTries = function() {
		if(score.length == 5) {
			return total; 
		} else {
			return false;
		}
	}

	// Save score in histroy sidebar
	this.appendScore = function() {
		var p = document.createElement('p');
		p.innerHTML = this.checkTries();
		return p;
	}

}
