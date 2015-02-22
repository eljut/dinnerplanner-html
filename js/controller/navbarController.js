//NavbarController Object constructor
var NavbarController = function (view,model,stateController) {

	view.container.on("click", "#home-button", function(event) {
		event.preventDefault();
		stateController.backToStart();
	});

}
