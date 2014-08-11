/**
 * @fileoverview file contain WebStorage module;
 * @author Roman_Stremedlovskyi@epam.com
 */

/**
 * @module WebStorage
 */
var WebStorage = (function () {

	"use strict";

	/**
	 * isLocalStorageAvailable function
	 */

	function isLocalStorageAvailable() {
    	try {
        	return 'localStorage' in window && window.localStorage !== null;
   		} catch (e) {
        	return false;
    	}
	}
	
	/**
	 * WebStorage constructor
	 * @param {String} key UserStory discussed user story
	 * @param {Object} value UserName: Estimation user's estimation 
	 */

	function WebStorage(key, value) {
		console.log("WebStorage constructor...");
		
		try {
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (e) {
			if (e === QUOTA_EXCEEDED_ERR) {
				alert('Oops... Your Web Storage is full!');
			}
		}
	}
	
	return WebStorage;

})();