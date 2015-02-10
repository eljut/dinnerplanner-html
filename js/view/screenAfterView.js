//ScreenAfterView Object constructor
var ScreenAfterView = function (container,model) {
	
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

	// Add dishes to menu
	var menu = model.getFullMenu();
	for ( var i = 0; i < menu.length; i++ ) {
		this.menuHead.after(
			'<div class="row menu-item"><a href="#remove" title="Remove" class="remove">X</a>'+
			'<div class="col-sm-3 dinner-col">'+
					menu[i].id+
				'</div><div class="col-sm-6 dinner-col">'+
					menu[i].name+
				'</div><div class="col-sm-3 dinner-col">'+
					model.getDishPrice(menu[i].id)+
				'</div></div>'
			);
	}

	//Select dish
	var allDishes = model.getAllDishes(this.dishType.val());
	for ( var i = 0; i < allDishes.length; i++ ) {
		this.dishes.append(
			'<div class="dish">'+
			'<div class="dish-head">'+
			'<img src="images/'+allDishes[i].image+'" alt="'+allDishes[i].name+'">'+
			'<span class="dish-name">'+allDishes[i].name+'</span></div>'+
			'<div class="dish-descr"><p>'+allDishes[i].description+'</p></div>'+
			'</div>'
			);
	}
	
	this.dishType.change(function() {
		var allDishes = model.getAllDishes($(this).val());
		$("#dishes").html("");
		for ( var i = 0; i < allDishes.length; i++ ) {
			$("#dishes").append(
				'<div class="dish">'+
				'<div class="dish-head">'+
				'<img src="images/'+allDishes[i].image+'" alt="'+allDishes[i].name+'">'+
				'<span class="dish-name">'+allDishes[i].name+'</span></div>'+
				'<div class="dish-descr"><p>'+allDishes[i].description+'</p></div>'+
				'</div>'
				);
		}
	});


}
 
