//DinnerOverviewController Object constructor
var DinnerOverviewController = function (view,model,stateController) {
	
	view.container.on("click", "#edit-dinner-btn", function(event) {
		console.log("Going back to select dish!");
		stateController.backFromDinnerOverview();
	});

	view.container.on("click", "#print-btn", function(event) {
		console.log("Going to dinnerPreparation!");
		stateController.showDinnerPreparation();
	});

	
}
