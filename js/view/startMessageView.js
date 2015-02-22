//StartMessageView Object constructor
var StartMessageView = function (container,model) {

	this.container = container;
	
	this.contents = '<h1>A Home Dinner Service</h1>'+
		'<hr><p>'+
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'+
		'</p><span id="start-quickly">start quickly</span>'+
		'<button id="new-dinner-btn" class="btn btn-default btn-lg" type="button">Create new dinner</button>';

	this.showView = function() {
		console.log("---Showing startMessageView");
		container.removeClass("no-padding no-margin");
		container.append(
			this.contents
		);
	}

	this.hideView = function() {
		console.log("---Hiding startMessageView");
		container.addClass("no-padding no-margin");
		this.contents = container.children().detach();
	}

}
