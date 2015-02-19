//StateController Object constructor
var StateController = function (navbarView,backgroundView,startMessageView,myDinnerTabView,selectDishView,selectedDishView,dinnerOverviewView,dinnerPreparationView) {
	
	//On start, show what's on the first screen
	startMessageView.showView();

	/*this.states = {
		new_dinner: function() {
			this.newDinner();
		},
		"house": function() {
			return "building";
		},
		"air":  function() {
			return "nothing";
		}
	};*/

	this.update = function(arg) {
		switch (arg) {
			case "new_dinner":
				this.newDinner();
				break;
			case "a": //Add next case here
				break;
			case "b": //And another one here etc
				break;
		}
	}

	this.newDinner = function() {
		console.log("Skapar new_dinner!");
		navbarView.makeOpaque();
		startMessageView.hideView();
		backgroundView.toggleBackground();
		$("#view-container").addClass("row full-height");
		myDinnerTabView.showView();
		selectDishView.showView();
	}

}
