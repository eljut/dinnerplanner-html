//BackgroundView Object constructor
var BackgroundView = function (container,model) {
	
	this.container = container;

	this.showBackground = function() {
		this.container.addClass("first-screen");
	}

	this.hideBackground = function() {
		this.container.removeClass("first-screen");
	}
	
}
