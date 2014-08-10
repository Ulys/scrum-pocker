/**
 * @fileoverview Game controller
 * @author olena_sovyn@epam.com
 */

/**
 * @module
 */
var ScrumPokerModule = (function () {

	"use strict";

	/**
	 * @constructor
	 * @param {Templates} template
	 * @param {Team} team
	 */
	function ScrumPoker (template, team) {

		console.log("Scrum poker constructor ...");

		this.template = template;
		console.log(template);
		//this.team = team;
		//this.listOfStory = [];
	}

	/**
	 * Create Game;
	 * @functon
	 */
	ScrumPoker.prototype.initGame = function () {
		console.log("Scrum Poker init game...");
		console.log(this.template);
		document.body.appendChild(this.template);
	};

	/**
	 * Bind event to the container element
	 * @function
	 * @param {HTMLElement} container
	 */
	ScrumPoker.prototype.bindEvents = function () {

		//function add

		//element.addEventListener("click", function () {}, false);
	}

	//Game logic

	//Start of the game
	var indexTemplate = new Templates();
	var newGame = new ScrumPoker(indexTemplate.currentTemplate());
	newGame.initGame();

	//
});