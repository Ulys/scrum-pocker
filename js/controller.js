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

		this.template.changeTemplate('addMember');
		this.bindEvents();
	};

	/**
	 * Bind event to the container element
	 * @function
	 * @author anton_razumovskyi@epam.com
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
			 * @function
			 * @param {HTMLElement || Array[HTMLElement]}
			 */
			function clearInput() {

				var i, len;

				if (arguments.length) {

					for (i = 0, len = arguments.length; i < len; i++) {

						arguments[i].value = '';
					}
				}
			}

			/**
			 * Add member to team
			 * @function
			 */
			function addMember () {

				var name,
					input = document.querySelector('input');

				if (input.value) {

					name = input.value;
					that.team.addMember(name);

					clearInput(input);
				}
			}

			/**
			 * Add User Story to US list
			 * @function
			 */
			function addStory () {

				var title,
					description,
					userStory,
					titleInput = document.querySelector('input'),
					descriptionInput = document.querySelector('textarea');

				if (titleInput.value) {

					title = titleInput.value;
					description = descriptionInput.value;
					userStory = new UserStory(title, description);

					that.listOfStory.push(userStory);

					clearInput(titleInput, descriptionInput);
				}
			}

			/**
			 * Change view to next step
			 * @function
			 */
			function nextStep () {

				var header = document.querySelector('h2').innerText,
					storyTemplate = /story/g,
					teamTemplate = /team/g;

				if (teamTemplate.test(header)) {

					that.template.changeTemplate('addStory');

				} else if (storyTemplate.test(header)) {

					that.template.changeTemplate('makeEstimate');
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
					nextStep();
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