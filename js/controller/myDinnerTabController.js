//MyDinnerTabController Object constructor
var MyDinnerTabController = function (view,model,stateController) {

	//Remove-buttons controller
	view.container.on("click", ".remove", function(event) {
		console.log("Removing dish");
		var id = $(this).data("dish-id");
		model.removeDishFromMenu(id);
		console.log("Removed dish from menu with id: "+id);
		event.preventDefault();
	});

	//Go to Dinner Overview
	view.container.on("click", "#confirm-dinner-btn", function(event) {
		stateController.showDinnerOverview();
	});

	//Updates number of guests
	view.container.on("change", "#number-of-guests", function(event) {
		console.log("Changing number of guests");
		var numberOfGuests = view.container.find("#number-of-guests").val();
		model.setNumberOfGuests(numberOfGuests);
		console.log("Changing number of guests to: "+numberOfGuests);
	});

	//Selects dish on menu
	view.container.on("click", "#menu-starter, #menu-main, #menu-dessert", function(event) {
		console.log("menu-starter clicked");
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
