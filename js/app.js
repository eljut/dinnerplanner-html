$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	//Add dishes for testing
	model.addDishToMenu(1);
	model.addDishToMenu(2);
	model.addDishToMenu(100);
	model.addDishToMenu(200);
	
	//And create the needed controllers and views
	var navbarView = new NavbarView($("#navbar"), model);
	var backgroundView = new BackgroundView($(document.body), model);
	var startMessageView = new StartMessageView($("#views"), model);
	var myDinnerTabView = new MyDinnerTabView($("#views"), model);
	var selectDishView = new SelectDishView($("#views"), model);
	var selectedDishView = new SelectedDishView($("#views"), model);
	var dinnerOverviewView = new DinnerOverviewView($("#views"), model);
	var dinnerPreparationView = new DinnerPreparationView($("#views"), model);

	var navbarController = new NavbarController(navbarView, model);
	var backgroundController = new BackgroundController(backgroundView, model);
	var startMessageController = new StartMessageController(startMessageView, model);
	var myDinnerTabController = new MyDinnerTabController(myDinnerTabView, model);
	var selectDishController = new SelectDishController(selectDishView, model);
	var selectedDishController = new SelectedDishController(selectedDishView, model);
	var dinnerOverControllerController = new DinnerOverviewController(dinnerOverviewView, model);
	var dinnerPreparationController = new DinnerPreparationController(dinnerPreparationView, model);
});
