//NavbarController Object constructor
var NavbarController = function (view,model,stateController) {

	view.homeButton.click(function() {
		view.nav.addClass("navbar-transparent");
		return false;
	});
}
