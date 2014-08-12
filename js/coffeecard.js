/**
 * @fileoverview file contain User Story module;
 * @author olena_sovyn@epam.com
 */

/**
 * @module CoffeeCard
 */

var CoffeeCard = ( function () {

	"use strict";

	function startTimer (minutes, seconds) {
		var CoffeeTimer = setInterval (function () {
			if (seconds==0)
			{
				minutes--;
				seconds=60;	
			}
				seconds--;
			console.log(minutes);
			if (minutes<10) {
				minutes = +minutes;
				minutes = "0"+minutes;
			}
			if (seconds<10) {
				seconds = +seconds;
				seconds = "0"+seconds;
			}
			document.getElementsByClassName('coffee-content__timer')[0].innerHTML=minutes+":"+seconds;
			if ((minutes==0)&&(seconds==0)) {
				clearInterval (CoffeeTimer);
				document.getElementsByClassName('black-overlay')[0].style.display="none";
				document.getElementsByClassName('coffee-content')[0].style.display="none";
			}
		}, 1000);

	}

	//<div class="black_overlay"></div>
	//<div class="coffee_content"><div></div><div></div></div>
	function activateCoffeeCard () {
		var temp = '',
			minutes = 10,
			seconds = "00";
		temp = '<div class="black-overlay"></div><div class="coffee-content"><div class="coffee-content__icon"><i class="icon-coffee"></i></div><div class="coffee-content__timer">'+minutes+':'+seconds+'</div></div>';
		document.body.innerHTML += temp;
		document.getElementsByClassName('black-overlay')[0].style.display="block";
		document.getElementsByClassName('coffee-content')[0].style.display="block";
		startTimer(10,0);
	}


	function CoffeeCard () {
		var card = document.getElementsByClassName('coffee-card')[0];
		card.addEventListener('click', activateCoffeeCard);
	};

	return CoffeeCard;
})();

