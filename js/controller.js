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
				console.log(that.team);
			}

			/**
			 * Add User Story to US list
			 * @function
			 */
			function addStory () {

				var title,
					description,
					userStory,
					priority,
					titleInput = document.querySelector('input'),
					descriptionInput = document.querySelector('textarea'),
					priorityInput = document.querySelectorAll('input')[1];

				if (titleInput.value) {

					title = titleInput.value;
					description = descriptionInput.value;
					priority = priorityInput.value;
					userStory = new UserStory(title, description, priority);

					that.listOfStory.push(userStory);

					clearInput(titleInput, descriptionInput, priorityInput);
				}
				console.log(that.listOfStory);
			}

			/**
			 * Change view to next step
			 * @function
			 */
			function nextStep () {

				var currentTemplate = that.template.currentTemplate,
					storyTemplate = /story/gi,
					teamTemplate = /member/gi;

				if (teamTemplate.test(currentTemplate)) {

					that.template.changeTemplate('addStory');

				} else if (storyTemplate.test(currentTemplate)) {

					that.template.changeTemplate('makeEstimate');
					CoffeeCard();
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
	};

	return ScrumPoker;
})();