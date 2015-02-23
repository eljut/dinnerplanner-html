$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	//Add dishes for testing
	/*model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(200);
	model.addDishToMenu(2);*/
	
	//And create the needed controllers and views
	var navbarView = new NavbarView($("#navbar"), model);
	var backgroundView = new BackgroundView($(document.body), model);
	var startMessageView = new StartMessageView($("#start-message"), model);
	var myDinnerTabView = new MyDinnerTabView($("#my-dinner"), model);
	var selectDishView = new SelectDishView($("#select-dish"), model);
	var selectedDishView = new SelectedDishView($("#select-dish"), model);
	var dinnerOverviewView = new DinnerOverviewView($("#dinner-overview"), model);
	var dinnerPreparationView = new DinnerPreparationView($("#dinner-preparation"), model);

	var stateController = new StateController(navbarView,backgroundView,startMessageView,myDinnerTabView,selectDishView,selectedDishView,dinnerOverviewView,dinnerPreparationView);

	var navbarController = new NavbarController(navbarView, model, stateController);
	var backgroundController = new BackgroundController(backgroundView, model, stateController);
	var startMessageController = new StartMessageController(startMessageView, model, stateController);
	var myDinnerTabController = new MyDinnerTabController(myDinnerTabView, model, stateController);
	var selectDishController = new SelectDishController(selectDishView, model, stateController);
	var selectedDishController = new SelectedDishController(selectedDishView, model, stateController);
	var dinnerOverControllerController = new DinnerOverviewController(dinnerOverviewView, model, stateController);
	var dinnerPreparationController = new DinnerPreparationController(dinnerPreparationView, model, stateController);
});
