/**
 * @fileoverview Game controller
 */

/**
 * @module
 */
var ScrumPoker = (function () {

	"use strict";

	/**
	 * @constructor
	 * @param {Templates} template
	 * @param {Team} team
	 */
	function ScrumPoker (template, team) {

		console.log("Scrum poker constructor ...");

		this.template = template;
		this.team = team;
		this.listOfStory = [];
	}

	/**
	 * Create Game;
	 * @functon
	 */
	ScrumPoker.prototype.initGame = function () {
		console.log("Scrum Poker init game...");
	};

	/**
	 * Bind event to the container element
	 * @function
	 * @param {HTMLElement} container
	 */
	ScrumPoker.prototype.bindEvents = function () {

		function add

		element.addEventListener("click", function () {}, false);
	}
});