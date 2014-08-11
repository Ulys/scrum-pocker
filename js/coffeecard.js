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

	function activateCoffeeCard () {
		var temp = '';
		temp = '<div class="black_overlay"></div><div class="coffee_content"><div></div><div></div></div>';
		document.body.innerHTML += temp;
		console.log(temp);
	}


	function CoffeeCard () {

		console.log("coffee card is listening");
		console.log(document.getElementsByClassName('coffee-card')[0]);
		var card = document.getElementsByClassName('coffee-card')[0];
		card.addEventListener('click', activateCoffeeCard);
	};

	return CoffeeCard;
})();

