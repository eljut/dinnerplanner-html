//SelectedDishView Object constructor
var SelectedDishView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that respond to interaction)
	this.container = container;

	//Add this view as an observer of model
	model.addObserver(this);

	this.container.removeClass("col-sm-9 no-side-padding");

	this.showView = function(id) {
		this.selectedDish = model.getDish(id);

		this.container.html(
			'<div class="col-sm-4 full-height" id="selected-dish-head">'+
				'<div id="selected-dish">'+
					'<h3>'+this.selectedDish.name+'</h3>'+
					'<img src="images/'+this.selectedDish.image+'" alt="'+this.selectedDish.name+'">'+
					'<h3>Preparation</h3>'+
					'<div class="dish-descr"><p>'+this.selectedDish.description+'</p></div>'+
				'</div>'+
				'<div class="">'+
					'<button id="back-btn" class="arrow-box" type="button">Back to Select Dish</button>'+
				'</div>'+
			'</div>'+
			'<div class="col-sm-5 full-height">'+
				'<div id="ingredients-table">'+
					'<h5><b>INGREDIENTS FOR <span id="number-of-guests-2">'+model.getNumberOfGuests()+'</span> PEOPLE</b></h5>'+
					'<hr>'+
					'<div class="row">'+
						'<div id="listOfIngredients"></div>'+
					'</div>'+
					'<hr>'+
					'<div class="row">'+
						'<div class="col-sm-7 dinner-col">'+
							'<button data-dish-id="'+this.selectedDish.id+'" id="confirm-dish-btn" class="btn btn-default btn-lg" type="button">Confirm Dish</button>'+
						'</div><div class="col-sm-2 dinner-col">'+
							'SEK'+
						'</div><div id="dish-price" class="col-sm-3 dinner-col">'+
							//Next plus sign drops extra zeroes at end of number
							+(model.getDishPrice(id)).toFixed(2)+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>');

		this.ingredientsTable = container.find("#listOfIngredients");
		var ingredients = this.selectedDish.ingredients; 
		for ( var i = 0; i < ingredients.length; i++ ) {
			this.ingredientsTable.append(
				'<div class="row">'+
					'<div class="col-sm-2 dinner-col">'+
						//Next plus sign drops extra zeroes at end of number
						+(ingredients[i].quantity*model.getNumberOfGuests()).toFixed(2)+' '+ingredients[i].unit+
					'</div><div class="col-sm-5 dinner-col">'+
						ingredients[i].name+
					'</div><div class="col-sm-2 dinner-col">'+
						'SEK'+
					'</div><div class="col-sm-3 dinner-col">'+
						//Next plus sign drops extra zeroes at end of number
						+(ingredients[i].price*model.getNumberOfGuests()).toFixed(2)+
					'</div>'+
				'</div>'
			);
		}
	}

	this.hideView = function() {
		console.log("---Hiding selectedDishView!");
		container.empty();
	}

	this.update = function(obj) {
		if (obj === "updateNumberOfGuests" && $("#selected-dish").length) {
			container.find("#number-of-guests-2").html(model.getNumberOfGuests());
			//this.ingredientsTable = container.find("#listOfIngredients");
			//Clear ingredients table
			this.ingredientsTable.html("");

			//Fill ingredients table
			var ingredients = this.selectedDish.ingredients; 
			for ( var i = 0; i < ingredients.length; i++ ) {
				this.ingredientsTable.append(
					'<div class="row">'+
						'<div class="col-sm-2 dinner-col">'+
							//Next plus sign drops extra zeroes at end of number
							+(ingredients[i].quantity*model.getNumberOfGuests()).toFixed(2)+' '+ingredients[i].unit+
						'</div><div class="col-sm-5 dinner-col">'+
							ingredients[i].name+
						'</div><div class="col-sm-2 dinner-col">'+
							'SEK'+
						'</div><div class="col-sm-3 dinner-col">'+
							//Next plus sign drops extra zeroes at end of number
							+(ingredients[i].price*model.getNumberOfGuests()).toFixed(2)+
						'</div>'+
					'</div>'
				);
			}

			container.find("#dish-price").html(+model.getDishPrice(this.selectedDish.id).toFixed(2));
		}
	}
	
}
 
