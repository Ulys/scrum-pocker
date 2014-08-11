/**
 * @fileoverview state of estimation process
 * @author anton_razumovskyi@epam.com
 */

/**
 * @module
 */

var EstimationProcess = (function () {

	/**
	 * @constructor
	 * @param {UserStory} story
	 * @param {Team} team
	 */
	function Estimation (story) {

		this.story = story;
		this.team = team;
		this.estimations = {};
	}

	/**
	 * Add estimation by team member to this.estimations
	 * @function
	 * @param {String} name
	 * @param {String} estimation
	 */
	Estimation.prototype.addEstimation = function (name, estimation) {

		this.estimations[name] = estimation;
	};

	/**
	 * Get all estimations
	 * @function
	 */
	Estimation.prototype.getEstimations = function () {
		return this.estimations;
	};

	return Estimation;
})();