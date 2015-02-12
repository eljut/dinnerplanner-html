//ScreenAfterView Object constructor
var SelectedDishView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that respond to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests2 = container.find("#numberOfGuests2");
	this.dish = container.find("#selected-dish");
	this.dishType = container.find("#dish-type");
	this.totalCost = container.find("#total-cost");
	this.menuHead = container.find("#menu-head");
	this.ingredientsTable = container.find("#listOfIngredients");
	
	this.numberOfGuests.val(model.getNumberOfGuests());

	// Add dish and get total cost
	model.addDishToMenu(100);
	model.addDishToMenu(2);

	this.totalCost.html(model.getTotalMenuPrice());
	this.numberOfGuests2.html(model.getNumberOfGuests());

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

	this.dishID = 2;
	//Selected dish
	var selectedDish = model.getDish(2);
		this.dish.append(
			'<h3>'+selectedDish.name+'</h3>'+
			'<img src="images/'+selectedDish.image+'" alt="'+selectedDish.name+'">'+
			'<h3>Preparation</h3>'+
			'<div class="dish-descr"><p>'+selectedDish.description+'</p></div>'
		);


	//List of Ingredients
	var ingredients = selectedDish.ingredients; 
	for ( var i = 0; i < ingredients.length; i++ ) {
		this.ingredientsTable.append(
				'<div class="row">'+
				'<div class="col-sm-2 dinner-col">'+
					(ingredients[i].quantity)*model.getNumberOfGuests()+' '+ingredients[i].unit+
				'</div><div class="col-sm-5 dinner-col">'+
					ingredients[i].name+
				'</div><div class="col-sm-2 dinner-col">'+
					'SEK'+
				'</div><div class="col-sm-3 dinner-col">'+
					(ingredients[i].price) * model.getNumberOfGuests()+
				'</div></div></div>'
			);
	}
}