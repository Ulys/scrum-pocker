describe("test User Story module", function () {


	it("check default priority parameter", function () {
		var DEFAULT_PRIORITY = 5;
		var userStory = UserStory("Title", "Description");
		expect(userStory.getPriority()).toBe(DEFAULT_PRIORITY);
	})


})