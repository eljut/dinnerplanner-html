//StateController Object constructor
var StateController = function (navbarView,backgroundView,startMessageView,myDinnerTabView,selectDishView,selectedDishView,dinnerOverviewView,dinnerPreparationView) {
	
	//On start, show what's on the first screen
	startMessageView.showView();

	//Hides the start screen
	this.hideStart = function() {
		navbarView.makeOpaque();
		startMessageView.hideView();
		backgroundView.hideBackground();
	}

	//Shows the start screen
	this.showStart = function() {
		navbarView.makeTransparent();
		startMessageView.showView();
		backgroundView.showBackground();
	}

	//Goes from start screen to select dish screen
	this.newDinner = function() {
		this.hideStart();
		console.log("Skapar new_dinner!");
		$("#view-container").addClass("row full-height");
		myDinnerTabView.showView();
		selectDishView.showView();
	}

	//Goes back to start screen
	this.backToStart = function() {
		myDinnerTabView.hideView();
		selectDishView.hideView();
		selectedDishView.hideView();
		dinnerOverviewView.hideView();
		dinnerPreparationView.hideView();
		$("#view-container").removeClass("row full-height");

		this.showStart();
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

	//Goes from selectDishView to dinnerOverview
	this.showDinnerOverview = function() {
		selectedDishView.hideView();
		myDinnerTabView.hideView();
		dinnerOverviewView.showView();
	}

	//Goes from dinnerOverviewView to selectDishView
	this.backFromDinnerOverview = function() {
		selectDishView.showView();
		myDinnerTabView.showView();
		dinnerOverviewView.hideView();
	}

}
