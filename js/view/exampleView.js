//ExampleView Object constructor
var ExampleView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that respond to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.dishes = container.find("#dishes");
	this.dishType = container.find("#dish-type");
	
	this.numberOfGuests.val(model.getNumberOfGuests());
	//this.dishes.html(this.dishType.val());

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
	})
}
 
