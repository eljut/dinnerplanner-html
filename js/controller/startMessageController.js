//StartMessageController Object constructor
var StartMessageController = function (view,model,stateController) {

	view.newDinnerButton.click(function() {
		stateController.update("new_dinner");
	});
}
