//StartMessageController Object constructor
var StartMessageController = function (view,model,stateController) {

	view.container.on("click", "#new-dinner-btn", function(event) {
		stateController.newDinner();
	});
}
