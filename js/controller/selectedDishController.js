//SelectedDishController Object constructor
var SelectedDishController = function (view,model,stateController) {

	view.container.on("click", "#confirm-dish-btn", function(event) {
		var id = $(this).data("dish-id");
		//console.log("Adding dish to menu: "+id);
		model.addDishToMenu(id);
		stateController.backFromSelectedDish();
	});

	view.container.on("click", "#back-btn", function(event) {
		//console.log("Going back to select dish!");
		stateController.backFromSelectedDish();
	});
}
