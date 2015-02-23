//DinnerPreparationController Object constructor
var DinnerPreparationController = function (view,model,stateController) {

	view.container.on("click", "#edit-dinner-btn", function(event) {
		stateController.backFromDinnerPreparation();
	});	
}
