//ScreenAfterView Object constructor
var DinnerOverviewView = function (container,model) {
	
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
			'<div class="dish">'+
			'<div class="dish-head">'+
			'<img src="images/'+fullMenu[i].image+'" alt="'+fullMenu[i].name+'">'+
			'<span class="dish-name">'+fullMenu[i].name+'</span></div>'+
			'<div class="dishCost"><b>'+model.getDishPrice(fullMenu[i].id)+' SEK</b></div>'+
			'</div>'
			);
	}
	this.dishes.append(
		'<div class="totalPrice">Total:<br>'+
		'<span>'+model.getTotalMenuPrice()+' SEK</span>'+
		'</div>'
		)
}
 
