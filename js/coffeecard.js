/**
 * @fileoverview file contain User Story module;
 * @author olena_sovyn@epam.com
 */

/**
 * @module CoffeeCard
 */

var CoffeeCard = ( function () {

	"use strict";

	//<div class="black_overlay"></div>
	//<div class="coffee_content"><div></div><div></div></div>
	function startTimer (minutes, seconds) {

	}

	function activateCoffeeCard () {
		var temp = '',
			minutes = 10,
			seconds = "00";
		temp = '<div class="black_overlay"></div><div class="coffee-content"><div class="coffee-content__icon">CoffeeTime</div><div class="coffee-content__timer">'+minutes+':'+seconds+'</div></div>';
		document.body.innerHTML += temp;
		setInterval (function () {
			minutes--;
			console.log(minutes);
			document.getElementsByClassName('coffee-content__timer')[0].hide().html(data).fadeIn('fast');

		}, 1000);

	}


	function CoffeeCard () {
		var card = document.getElementsByClassName('coffee-card')[0];
		card.addEventListener('click', activateCoffeeCard);
	};

	return CoffeeCard;
})();