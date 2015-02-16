$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var navbarView = new NavbarView($("#navbar"), model);
	var backgroundView = new BackgroundView($(document.body), model);
	var startMessageView = new StartMessageView($("#views"), model);
	var myDinnerTabView = new MyDinnerTabView($("#views"), model);
	var selectDishView = new SelectDishView($("#views"), model);
	var selectedDishView = new SelectedDishView($("#views"), model);
});
