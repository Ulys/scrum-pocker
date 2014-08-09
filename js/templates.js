/**
 * @fileoverview Store templates of different view
 * @author anton_razumovskyi@epam.com
 */

/**
 * Template module
 * @module
 */
var Templates = (function () {

	"use strict";

	/**
	 * Create wrapper div
	 * @function
	 * @param {String} className className of new element
	 * @return {HTMLElement} wrapper
	 */
	function createWrapper (className) {

		var wrapper = document.createElement("div");

		wrapper.className = className;

		return wrapper;
	}

	/**
	 * Create h2 element of template
	 * @function
	 * @param {String} className className of new element
	 * @param {String} text innerHTML of header
	 * @return {HTMLElement} header
	 */
	function createHeader (className, text) {

		var header = document.createElement("h2");

		header.className = className;
		header.innerHTML = text;

		return header;
	}

	/**
	 * Create input element type='text'
	 * @function
	 * @param {String} className className of new element
	 * @param {String} placeholder
	 * @return {HTMLElement} input
	 */
	function createInputField (className, placeholder) {

		var input = document.createElement("input");

		input.className = className;
		input.setAtribute("type", "text");
		input.setAtribute("placeholder", placeholder);

		return input;
	}

	/**
	 * Create input element type='button'
	 * @function
	 * @param {String} className className of new element
	 * @param {String} value
	 * @return {HTMLElement} input
	 */
	function createButton (className, value) {

		var input = document.createElement("input");

		input.className = className;
		input.setAtribute("type", "button");
		input.setAtribute("value", value);

		return input;
	}

	/**
	 * Append few elements in parent node
	 * @function
	 * @param {HTMLElement} parent
	 * @param { HTMLElement | Array[HTMLElement]} children
	 */
	function appendChildren(parent, children) {

		var i,
			len;

		if (children && children instanceof Array) {

			for (i = 0, len = children.length; i < len; i++) {

				parent.appendChild(children[i]);
			}

		} else if (children){

			parent.appendChild(children);
		}
	}

	/**
	 * Pattern for adding member page
	 * <div class="name-add">
	 *		<h2 class="name_add__title"></h2>
	 *		<input class="name-add__input" type="text" value="Member name">
	 *		<div class="name-add__buttons">
	 *			<input type="submit" class="name-add__button" value="Add more members">
	 *			<input type="submit" class="name-add__button" value="Go to next step">
	 *		</div>
	 *	</div>
	 * @return {documentFragment}
	 */
	var addMember = (function () {

		var fragment = document.createDocumentFragment(),
			wrapper = createWrapper("name-add"),
			header = createHeader("name_add__title", "Add name of your team member"),
			nameInput = createInputField("name-add__input", "Member name"),
			buttonsWrapper = createWrapper("name-add__buttons"),
			moreMembersButton = createButton("name-add__button", "Add more members"),
			nextStepButton = createButton("name-add__button", "Go to next step");

		appendChildren(buttonsWrapper, [moreMembersButton, nextStepButton]);
		appendChildren(wrapper, [header, nameInput, buttonsWrapper]);
		fragment.appendChild(wrapper);

		return fragment;
	})();

	/**
	 * Pattern for adding member page
	 * <div class="name-add">
	 *		<h2 class="name_add__title"></h2>
	 *		<input class="name-add__input" type="text" value="Member name">
	 *		<textarea class="name-add__input" type="text" value="Member name">
	 *		</textarea>
	 *		<div class="name-add__buttons">
	 *			<input type="submit" class="name-add__button" value="Add new story">
	 *			<input type="submit" class="name-add__button" value="Go to next step">
	 *		</div>
	 *	</div>
	 * @return {documentFragment}
	 */
	var addStory = (function () {

		/**
		 * Create text area for story description
		 * @function
		 * @return {HTMLElement} textarea
		 */
		function createTextArea () {

			var textarea = document.createElement("textarea"),
				rows = 8,			/*Number of rows in textarea*/
				cols = 50;			/*Number of cols in textarea*/

			textarea.className("story-add__textarea");
			textarea.setAtribute("rows", rows);
			textarea.setAtribute("cols", cols);
			textarea.setAtribute("cols", cols);
			textarea.name = "storyDescription";

			return textarea;
		}

		var fragment = document.createDocumentFragment(),
			wrapper = createWrapper("name-add"),
			header = createHeader("name_add__title", "Describe your user story"),
			titleInput = createInputField("name-add__input", "Title"),
			storyDescription = createTextArea();
			buttonsWrapper = createWrapper("name-add__buttons"),
			moreStoryButton = createButton("name-add__button", "Add more members"),
			nextStepButton = createButton("name-add__button", "Go to next step");

		appendChildren(buttonsWrapper, [moreStoryButton, nextStepButton]);
		appendChildren(wrapper, [header, titleInput, storyDescription, buttonsWrapper]);
		fragment.appendChild(wrapper);

		return fragment;
	})();

	var makeEstimate = (function () {})();

	return ;
})();