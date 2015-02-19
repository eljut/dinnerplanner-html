//NavbarController Object constructor
var NavbarController = function (view,model) {

	view.homeButton.click(function() {
		view.nav.addClass("navbar-transparent");
		return false;
	});
}
