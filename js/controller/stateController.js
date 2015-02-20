//StateController Object constructor
var StateController = function (navbarView,backgroundView,startMessageView,myDinnerTabView,selectDishView,selectedDishView,dinnerOverviewView,dinnerPreparationView) {
	
	//On start, show what's on the first screen
	startMessageView.showView();

	//Hides the start screen
	this.hideStart = function() {
		navbarView.makeOpaque();
		startMessageView.hideView();
		backgroundView.toggleBackground();
	}

	//Goes from start screen to select dish screen
	this.newDinner = function() {
		this.hideStart();
		console.log("Skapar new_dinner!");
		$("#view-container").addClass("row full-height");
		myDinnerTabView.showView();
		selectDishView.showView();
	}

	//Goes from selectDishView to selectedDishView
	this.showSelectedDish = function(id) {
		console.log("Visar maträtt med id: "+id);
		selectDishView.hideView();
		selectedDishView.showView(id);
	}

	//Goes from selectedDishView to selectDishView
	this.backFromSelectedDish = function() {
		selectedDishView.hideView();
		selectDishView.showView();
	}

}
