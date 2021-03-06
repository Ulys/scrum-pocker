/**
 * @fileoverview Store templates of different view
 * @author anton_razumovskyi@epam.com
 */

/**
 * Template module
 * @module
 */
var Templates = (function () {

	'use strict';

	/**
	 * Create wrapper div
	 * @function
	 * @param {String} className className of new element
	 * @return {HTMLElement} wrapper
	 */
	function createWrapper (className) {

		var wrapper = document.createElement('div');

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
	function createHead (className, text) {

		var header = document.createElement('h2');

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

		var input = document.createElement('input');

		input.className = className;
		input.setAttribute('type', 'text');
		input.setAttribute('placeholder', placeholder);

		return input;
	}

	/**
	 * Create input element type='button'
	 * @function
	 * @param {String} className className of new element
	 * @param {String} value
	 * @param {String} name Name attribute
	 * @return {HTMLElement} input
	 */
	function createButton (className, value, name) {

		var input = document.createElement('input');

		input.className = className;
		input.setAttribute('type', 'button');
		input.setAttribute('value', value);
		input.setAttribute('name', name);

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
	 * <div class='name-add'>
	 *		<h2 class='name_add__title'></h2>
	 *		<input class='name-add__input' type='text' placeholder='Member name'
	 *													name='memeberName'>
	 *		<div class='name-add__buttons'>
	 *			<input type='submit' class='name-add__button' value='Add more members'>
	 *			<input type='submit' class='name-add__button' value='Go to next step'>
	 *		</div>
	 *	</div>
	 * @function
	 * @return {documentFragment}
	 */
	var addMember = function () {

		var fragment = document.createDocumentFragment(),
			wrapper = createWrapper('name-add'),
			header = createHead('name_add__title', 'Add name of your team member'),
			nameInput = createInputField('name-add__input', 'Member name'),
			buttonsWrapper = createWrapper('name-add__buttons'),
			moreMembersButton = createButton('name-add__button', 'Add more members', 'addMember'),
			nextStepButton = createButton('name-add__button', 'Go to next step', 'next');

		appendChildren(buttonsWrapper, [moreMembersButton, nextStepButton]);
		appendChildren(wrapper, [header, nameInput, buttonsWrapper]);
		fragment.appendChild(wrapper);

		return fragment;
	};

	/**
	 * Pattern for adding member page
	 * @function
	 * <div class='name-add'>
	 *		<h2 class='name_add__title'></h2>
	 *		<input class='name-add__input' type='text' value='Member name'>
	 *		<textarea class='name-add__input' type='text' value='Member name'>
	 *		<input list='priority'>
	 *			<datalist id='priority'>
	 *				<option value='1'>
	 *				<option value='2'>
	 *				<option value='3'>
	 *				<option value='4'>
	 *				<option value='5'>
	 *			</datalist>
	 *		</textarea>
	 *		<div class='name-add__buttons'>
	 *			<input type='submit' class='name-add__button' value='Add new story'>
	 *			<input type='submit' class='name-add__button' value='Go to next step'>
	 *		</div>
	 *	</div>
	 * @return {documentFragment}
	 */
	var addStory = function () {

		/**
		 * Create text area for story description
		 * @function
		 * @return {HTMLElement} textarea
		 */
		function createTextArea () {

			var textarea = document.createElement('textarea'),
				rows = 5,			/*Number of rows in textarea*/
				cols = 50;			/*Number of cols in textarea*/

			textarea.className = 'story-add__textarea';
			textarea.setAttribute('rows', rows);
			textarea.setAttribute('cols', cols);
			textarea.setAttribute('placeholder', 'Story description');
			textarea.style.resize = 'none';

			return textarea;
		}

		/**
		 * Create input field associated with datalist
		 * @function
		 * return {HTMLElement}
		 */
		 function createInputList () {

		 	var input = document.createElement('input');

		 	input.setAttribute('list', 'priority');
		 	input.setAttribute('placeholder', 'Priority');

		 	return input;
		 }
		/**
		 * Create combobox for story prority
		 * @function
		 * @return {HTMLElement} textarea
		 */
		function createDataList () {

			var i,
				option,
				optionsNumber = 5,
				dataList = document.createElement('datalist');

			dataList.id = 'priority';

			for (i = 1; i <= optionsNumber; i++) {

				option = document.createElement('option');
				option.setAttribute('value', i.toString());

				dataList.appendChild(option);
			}

			return dataList
		}

		var fragment = document.createDocumentFragment(),
			wrapper = createWrapper('name-add'),
			header = createHead('name_add__title', 'Describe your user story'),
			titleInput = createInputField('name-add__input', 'Title'),
			storyDescription = createTextArea(),
			inputList = createInputList(),
			dataList = createDataList(),
			buttonsWrapper = createWrapper('name-add__buttons'),
			moreStoryButton = createButton('name-add__button', 'Add more story', 'addStory'),
			nextStepButton = createButton('name-add__button', 'Go to next step', 'next');

		appendChildren(buttonsWrapper, [moreStoryButton, nextStepButton]);
		appendChildren(wrapper, [header, titleInput, storyDescription,
								inputList, dataList, buttonsWrapper]);
		fragment.appendChild(wrapper);

		return fragment;
	};

	/**
	 * Pattern for making estimate
	 * @function
	 *  <div class='circle__header'></div>
	 * 	<div class='play-field'></div>
	 *	<div class='cards-field'>
	 *		<div class='cards-field__simple'>
	 *			<div class='card' name='card1'>1</div>
	 *			<div class='card' name='card2'>2</div>
	 *			<div class='card' name='card3'>3</div>
	 *			<div class='card' name='card5'>5</div>
	 *			<div class='card' name='card8'>8</div>
	 *			<div class='card' name='card13'>13</div>
	 *			<div class='card' name='card?'>?</div>
	 *			<div class='card' name='cardInf'>Infinity</div>
	 *		</div>
	 *		<div class='coffee-card'>
	 *		</div>
	 *	</div>
	 * @return {documentFragment}
	 */
	var makeEstimate = function () {

		/**
		 * Create array of card containers
		 * @function
		 * @return {Array[HTMLElement]}
		 */
		function createCardsElements() {
			var item,
				card,
				cardsValue = {
					'1': '1',
					'2': '2',
					'3': '3',
					'5': '5',
					'8': '8',
					'13': '13',
					'?': '?',
					'Inf': 'Infinity'
				},
				elements = [];

				for (item in cardsValue) {

					if (cardsValue.hasOwnProperty(item)) {

						card = createWrapper('card');
						card.setAttribute('name', 'card' + item);
						card.innerHTML = cardsValue[item];
						elements.push(card);
					}
				}

				return elements;
		}

		var fragment = document.createDocumentFragment(),
			head = createWrapper('circle__header'),
			playField = createWrapper('play-field'),
			cardsField = createWrapper('cards-field'),
			cardsWrapper = createWrapper('cards-field__simple'),
			cardList = createCardsElements(),
			coffeeCard = createWrapper('coffee-card icon-coffee');

		appendChildren(cardsWrapper, cardList);
		appendChildren(cardsField, [cardsWrapper, coffeeCard]);
		appendChildren(fragment, [head, playField, cardsField]);

		return fragment;
	};

	/**
	 * Template controller
	 * @class
	 */

	/**
	 * @constructor
	 * @param {HTMLElement} wrapepr Wrapper for template
	 */
	function TemplateController(wrapper) {

		this.wrapper = wrapper;
		this._templates = {
			'addMember': addMember,
			'addStory': addStory,
			'makeEstimate': makeEstimate
		};
		this.currentTemplate = null;
	}

	/**
	 * Change template
	 * @function
	 * @param {String} newTemplate Name of template
	 */
	TemplateController.prototype.changeTemplate = function (newTemplate) {

		if (newTemplate in this._templates) {

			this._removeTemplate();
			this._setTemplate(newTemplate);
		}
	};

	/**
	 * Remove current template from page
	 * @private
	 * @function
	 */
	TemplateController.prototype._removeTemplate = function () {

		this.wrapper.innerHTML = '';
		this.currentTemplate = null;
	};

	/**
	 * Set new template to page
	 * @private
	 * @function
	 * @param {String} template Name of Template
	 */
	 TemplateController.prototype._setTemplate = function (template) {

	 	this.currentTemplate = template;
	 	this.wrapper.appendChild(this._templates[template]());
	 };

	return TemplateController;
})();