$(document).ready(function() {

	function skillsCounter(){
		var slillItem = $('.js-item'),
			totalAmount = slillItem.length,
			checkedAmount = $('input:checked', slillItem).length,
			temp = checkedAmount/totalAmount,
			degreeRotate = temp*180,
			skillScore = parseInt(temp*1000),
			scoreNumber = $('.score'),
			rotateBox = $('.score-arrow');

		var defaultState = 0;
		function scoreCounter(item, value){
			setTimeout(function(){
				defaultState++;
				if(item == scoreNumber){
					item.text(defaultState);
				} else {
					item.css({
						transform: 'rotate(' + value + 'deg)'
					})
				}
				if(defaultState < value){
					scoreCounter(item, value);
				}
			}, 5)
		}
		scoreCounter(scoreNumber, skillScore);
		scoreCounter(rotateBox, degreeRotate);
	}

	skillsCounter();

	$('.js-item input').on('change', function () {
		skillsCounter();
	})


});
