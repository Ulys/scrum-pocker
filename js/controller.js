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

		// this.initGame();
	}

	/**
	 * Create Game;
	 * @functon
	 */
	ScrumPoker.prototype.initGame = function () {
		console.log("Scrum Poker init game...");

		this.template.changeTemplate('addMember');
		this.bindEvents();
	};

	/**
	 * Bind event to the container element
	 * @function
	 * @param {HTMLElement} container
	 */
	ScrumPoker.prototype.bindEvents = function () {

		/**
		 * Handler for buttons
		 * @function
		 * @param {HTMLEvent} src
		 */
		function buttonHandler (src) {

			/**
			 * Add member to team
			 * @function
			 */
			function addMember() {

				var name,
					input = document.querySelector('input');

				if (input.value) {

					name = input.value;
					that.team.addMember(name);
				}
			}

			/**
			 * Add User Story to US list
			 * @function
			 */
			function addStory() {

				var title,
					description,
					userStory,
					titleInput = document.querySelector('input'),
					descriptionInput = document.querySelector('textarea');

				console.dir(descriptionInput);

				if (titleInput.value) {

					title = titleInput.value;

					that.listOfStory.push(name);
					// console.log(that.team);
				}
			}

			var source = src.srcElement;

			switch (source.getAttribute('name')) {
				case 'addMember':
					addMember();
					break;
				case 'addStory':
					addStory();
					break;
				case 'next':
					break;
				default:
					break;
			}
		}

		var that = this;

		this.template.wrapper.addEventListener("click", buttonHandler, false);
	}

	return ScrumPoker;
})();