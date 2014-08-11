

(function main () {
	"use strict";

	console.log("main ...");

	var wrapper = document.getElementsByClassName('content')[0],
		team = new Team(),
		template = new Templates(wrapper),
		game = new ScrumPoker(template, team);

	game.initGame();
})();