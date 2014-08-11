/**
 * @fileoverview file contain Team module;
 * @author anton_razumovskyi@epam.com
 */

/**
 * @module
 */
var Team = (function () {

	"use strict";

	/**
	 * Team Member class;
	 * @class
	 */

	/**
	 * Team Member Class
	 * @constructor
	 * @param {String} name Name of Team Member
	 */
	function TeamMember(name) {

		this.name = name;
		this.estimation = null;
	}

	/**
	 * @function
	 * @param {String} estimation;
	 */
	TeamMember.prototype.setEstimation = function (estimation) {

			this.estimation = estimation;
	};

	/**
	 * Team
	 * @class
	 */

	/**
	 * @constructor
	 */
	function Team () {

		this.members = [];
	}

	/**
	 * Minimal number of team members
	 * @const
	 * @type {Number}
	 */
	Team.MIN_NUMBER_OF_TEAM_MEMBER = 2;
	/**
	 * Add new member to the team
	 * @function
	 * @param {TeamMemberName} newMember
	 */
	Team.prototype.addMember = function (newMemberName) {

		var newMember = new TeamMember(newMemberName);

		this.members.push(newMember);
	};

	return Team;
})();