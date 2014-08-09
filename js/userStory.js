/**
 * @fileoverview file contain userStory module;
 * @author anton_razumovskyi@epam.com
 */

/**
 * @module UserStory
 */
var UserStory = (function () {
	"use strict";

	var DEFAULT_PRIORITY = 5,			// @const define default priority of user story
		MAX_TITLE_LENGTH = 80,			// @const define max length of user story title
		MAX_DESCRIPTION_LENGTH = 200;	// @const define max length of user story description

	/**
	 * UserStory constructor
	 * @param {String} title Name of user story
	 * @param {String} description Description of user story
	 * @param {Number} [priority] User story priority is optional
	 */
	function userStory(title, description, priority) {

		var	_priority, //@private Priority of user story
			_estimation, //@private Estimation of user Story
			me;

		/**
		 * @function Initialize priority
		 */
		function init (title, description, priority) {
			_priority = priority || DEFAULT_PRIORITY;
			checkLengthOfStringParameters();
		}
		/**
		 * @function Check length of title and description
		 * @throw {TooLongNames}
		 */
		function checkLengthOfStringParameters(title, description) {
			if (title.length > MAX_TITLE_LENGTH &&
				description.length > MAX_DESCRIPTION_LENGTH) {
				throw Error("TooLongNames");
			}
			return true;
		}
		/**
		 * @function Setter of _estimate field
		 * @param {Number} est user story estimation
		 */
		function setEstimation(est) {
			_estimation = est;
		}
		/**
		 * @function Getter of _estimate field
		 * @return {Number | undefined}
		 */
		function getEstimation(){
			return _estimation;
		}
		/**
		 * @function Getter of _priority field
		 * @return {Number}
		 */
		function getPriority(){
			return _priority;
		}

		me = {
			title: title,
			description: description,
			getPriority: getPriority,
			setEstimation: setEstimation,
			getEstimation: getEstimation
		};

		return me;
	}

	return userStory;

})();