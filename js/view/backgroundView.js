//BackgroundView Object constructor
var BackgroundView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that respond to interaction)
	
	this.homeButton = container.find(".navbar-brand");
	this.container = container;

	this.toggleBackground = function() {
		this.container.toggleClass("first-screen");
	}
	
}
