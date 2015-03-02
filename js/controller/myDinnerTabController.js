//MyDinnerTabController Object constructor
var MyDinnerTabController = function (view,model,stateController) {

	//Remove-buttons controller
	view.container.on("click", ".remove", function(event) {
		event.preventDefault();
		event.stopPropagation();
		var id = $(this).data("dish-id");
		model.removeDishFromMenu(id);
		console.log("Removed dish from menu with id: "+id);
	});

	//Go to Dinner Overview
	view.container.on("click", "#confirm-dinner-btn", function(event) {
		stateController.showDinnerOverview();
	});

	//Updates number of guests
	view.container.on("change", "#number-of-guests", function(event) {
		var numberOfGuests = view.container.find("#number-of-guests").val();
		model.setNumberOfGuests(numberOfGuests);
		console.log("Changing number of guests to: "+numberOfGuests);
	});

	//Selects dish on menu
	view.container.on("click", ".menu-item", function(event) {
		var id = $(this).children().data("dish-id");
		console.log("Clicked dish with id: "+id);
		if(typeof id === 'undefined') {
			console.log("Id was undefined, going back to select dish");
			stateController.backFromSelectedDish();
		} else {
			stateController.showSelectedDish(id);
		}

	});
}
