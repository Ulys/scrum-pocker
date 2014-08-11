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

	function activateCoffeCard () {
		document.createDocumentFragment();
		document.body.appendChild();
		document.body.appendChild();
	}


	function CoffeeCard () {
		document.getElementsByClassName('coffee-card')[0].addEventListener('onclick',
			activateCoffeCard());
	}


	return CoffeeCard;
});