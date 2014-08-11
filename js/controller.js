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
		this.estimationProcess = null;
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

				var i,
					len;

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

				/**
				 * Check number of members
				 * @function
				 * @return {Boolean}
				 *					true - enough memebers
				 *					false - need more members
				 */
				function checkMemberNumber() {

					return that.team.members.length >= Team.MIN_NUMBER_OF_TEAM_MEMBER;
				}

				/**
				 * Check stories number
				 * @function
				 * @return {Boolean}
				 *					true - enough stories
				 *					false - need none story
				 */
				function checkStoryNumber() {

					return !!that.listOfStory.length;
				}

				/**
				 * Show notifacation
				 * @function
				 * @param {String} message
				 */
				function showNotifiacation (message) {

					alert(message);
				}

				/**
				 * Set member to make estimation
				 * @function
				 */
				function setMember() {

					var wrapper = document.getElementsByClassName('circle__header')[0],
						header = document.createElement('h1');

					header.innerHTML = that.team.members[numberOfMember].name;
					wrapper.appendChild(header);
				}

				/**
				 * Start estimation
				 * @function
				 */
				function estimationStart() {

					setMember();
					estimationFlg = true;
				}

				var currentTemplate = that.template.currentTemplate,
					storyTemplate = /story/gi,
					teamTemplate = /member/gi;

				if (teamTemplate.test(currentTemplate)) {

					if (checkMemberNumber()){

						that.template.changeTemplate('addStory');
					} else {

						showNotifiacation("Add at leat two team member");
					}

				} else if (storyTemplate.test(currentTemplate)) {

					if (checkStoryNumber()) {

						that.template.changeTemplate('makeEstimate');
						estimationStart();
						CoffeeCard();
					} else {

						showNotifiacation("Add at least one story");
					}
				}
			}

			var source = src.srcElement,
				name = source.getAttribute('name'),
				pattern = /card[\d+,\S]/;

			if (pattern.test(name)) {
				console.log(name);
			}

			switch (name) {
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

		var that = this,
			numberOfMember = 0,
			estiamtionFlg = false;

		this.template.wrapper.addEventListener("click", buttonHandler, false);
	};

	return ScrumPoker;
})();