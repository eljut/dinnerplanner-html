//ScreenAfterView Object constructor
var DinnerPreparationView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that respond to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishes = container.find("#dishes");
	this.dishType = container.find("#dish-type");
	this.totalCost = container.find("#total-cost");
	this.menuHead = container.find("#menu-head");
	
	this.numberOfGuests.val(model.getNumberOfGuests());

	// Add dish and get total cost
	model.addDishToMenu(100);
	model.addDishToMenu(2);

	this.totalCost.html(model.getTotalMenuPrice());
	this.numberOfGuests.html(model.getNumberOfGuests());

	//Select dish
	var fullMenu = model.getFullMenu();
	for ( var i = 0; i < fullMenu.length; i++ ) {
		this.dishes.append(
			'<div class="row">'+
			'<div id="dishDiv" class="col-sm-3 dinner-col">'+
				'<span id="dishImage"><img src="images/'+fullMenu[i].image+'" alt="'+fullMenu[i].name+'"></img></span></div>'+
			'<div class="col-sm-4 dinner-col">'+
				'<h3>'+fullMenu[i].name+'</h3></div>'+
			'<div class="col-sm-5 dinner-col">'+
				'<h3>Preparation</h3>'+
				'<div class="dish-descr"><p>'+fullMenu[i].description+'</p></div></div>'+
			'</div>'
			);
	}
}
 
