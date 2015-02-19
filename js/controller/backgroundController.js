//BackgroundController Object constructor
var BackgroundController = function (view,model) {

	view.homeButton.click(function() {
		view.container.addClass("first-screen");
		return false;
	});
}
