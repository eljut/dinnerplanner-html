//BackgroundView Object constructor
var BackgroundView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that respond to interaction)
	
	var homeButton = container.find(".navbar-brand");
	container.toggleClass("first-screen");

	homeButton.click(function() {
		container.toggleClass("first-screen");
		return false;
	});
	
}