function wheelGame() {
	var stop;
	var i = 0;
	var score = [];
	var list = $('#circles').children();
	this.total = 0;

	this.startGame = function() {
		stop = setInterval(function() {
			$(list[i]).css('color', 'black').css('border', '2px solid black').attr('data-win', 'none');
			setTimeout(function() {
				$(list[i]).css('color', 'red').css('border', '2px solid red').css('font-weight', 'bold').attr('data-win', 'win');
			}, 5);
			i++;
			if (i == list.length) {
				i = 0;
			}
		}, 40);
	}

	this.stopGame = function() {
		clearInterval(stop);
	}

	this.getScore = function() {
		this.total = 0;
		score.push($('#circles').find("li[data-win=win]").attr('data-score'));
		if(score.length > 5) {
			var last = score.pop();
			score = [];
			score.push(last);
		}
		for(var i=0; i<score.length; i+=1) {
			this.total += parseInt(score[i]);
		}
		return this.total
	}
	this.checkTries = function() {
		if(score.length == 5) {
			return this.total;
		} else {
			return false;
		}
	}

}
