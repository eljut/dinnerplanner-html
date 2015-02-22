//MyDinnerTabController Object constructor
var MyDinnerTabController = function (view,model,stateController) {

	view.container.on("click", ".remove", function(event) {
		console.log("Removing dish");
		var id = $(this).parent().find("#dish-id").data();
		model.removeDishFromMenu(id);
		console.log("Removed dish from menu with id: "+id);
		event.preventDefault();
	});

	view.container.on("change", "#menu", function(event) {
		console.log("Menu changed");
	});

	view.container.on("click", "#confirm-dinner-btn", function(event) {
		//console.log("Going back to select dish!");
		stateController.showDinnerOverview();
	});
}
