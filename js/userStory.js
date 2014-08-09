/**
 * @fileoverview file contain User Story module;
 * @author anton_razumovskyi@epam.com
 */

/**
 * @module UserStory
 */
var UserStory = (function () {

	"use strict";

	/**
	 * UserStory constructor
	 * @param {String} title Name of user story
	 * @param {String} description Description of user story
	 * @param {Number} [priority] User story priority is optional
	 */
	function UserStory(title, description, priority) {
		console.log("User story constructor...");

		this.title = checkTitle(title);
		this.description = checkDescription(description);
		this._estimation = null;

		if (priority) {

			this.priority = priority;
		}
	}

	/**
	 * @const
	 * define default priority of user story
	 */
	UserStory.DEFAULT_PRIORITY = 5;

	/**
	 * @const
	 * define max length of user story title
	 */
	UserStory.MAX_TITLE_LENGTH = 80;

	/**
	 * @const
	 * define max length of user story description
	 */
	UserStory.MAX_DESCRIPTION_LENGTH = 200;

	/**
	 * Check length of description;
	 * @function
	 * @param {String} description
	 * @return {String} >= UserStory.MAX_DESCRIPTION_LENGTH
	 */
	function checkDescription (description) {

		if (description.length > UserStory.MAX_DESCRIPTION_LENGTH) {

			return description.substr(UserStory.MAX_DESCRIPTION_LENGTH);

		}

		return description;
	}

	/**
	 * Check length of title
	 * @function
	 * @param {String} title
	 * @return {String} >= UserStory.MAX_TITLE_LENGTH
	 */
	function checkTitle (title) {

		if (title.length > UserStory.MAX_TITLE_LENGTH) {

			return title.substr(UserStory.MAX_TITLE_LENGTH);

		}

		return title;
	}

	/**
	 * @function Setter of _estimate field
	 * @param {Number} est user story estimation
	 */
	UserStory.prototype.setEstimation = function (est) {

		this._estimation = est;
	};

	/**
	 * @function Getter of _estimate field
	 * @return {Number | null}
	 */
	UserStory.prototype.getEstimation = function (){

		return this._estimation;
	};


	return UserStory;

})();