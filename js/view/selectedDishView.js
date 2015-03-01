//SelectedDishView Object constructor
var SelectedDishView = function (container,model) {

	this.container = container;

	//Add this view as an observer of model
	model.addObserver(this);

	// this.container.removeClass("col-sm-9 no-side-padding");

	this.showView = function(id) {
		model.setCurrentState("selectedDish");
		model.getDish(id);
	}

	this.hideView = function() {
		console.log("---Hiding selectedDishView!");
		container.empty();
	}

	this.update = function(obj) {
		if (model.getCurrentState() === "selectedDish" && obj === "updateNumberOfGuests" && $("#selected-dish").length) {
			container.find("#number-of-guests-2").html(model.getNumberOfGuests());
			container.find("#dish-price").html((model.getDishPrice(this.selectedDish)).toFixed(2));
			//this.ingredientsTable = container.find("#listOfIngredients");
			//Clear ingredients table
			this.ingredientsTable.html("");

			//Fill ingredients table
			var ingredients = this.selectedDish.Ingredients; 
			for ( var i = 0; i < ingredients.length; i++ ) {
				this.ingredientsTable.append(
					'<div class="row">'+
						'<div class="col-sm-2 dinner-col">'+
							//Next plus sign drops extra zeroes at end of number
							+(ingredients[i].MetricQuantity*model.getNumberOfGuests()).toFixed(2)+' '+ingredients[i].MetricUnit+
						'</div><div class="col-sm-5 dinner-col">'+
							ingredients[i].Name+
						'</div><div class="col-sm-2 dinner-col">'+
							'SEK'+
						'</div><div class="col-sm-3 dinner-col">'+
							//Next plus sign drops extra zeroes at end of number
							+(ingredients[i].MetricQuantity*model.getNumberOfGuests()).toFixed(2)+
						'</div>'+
					'</div>'
				);
			}

			//container.find("#dish-price").html(+model.getDishPrice(this.selectedDish.id).toFixed(2));
		}

		if (model.getCurrentState() === "selectedDish" && typeof obj === 'object') {
			this.selectedDish = obj;

			this.container.html(
			'<div class="col-sm-4 full-height" id="selected-dish-head">'+
				'<div id="selected-dish">'+
					'<h3 id="selectedDishName">'+this.selectedDish.Title+'</h3>'+
					'<img src="'+this.selectedDish.ImageURL+'" alt="'+this.selectedDish.Title+'">'+
					'<div id="selected-descr"><p>'+this.selectedDish.Description+'</p></div>'+
				'</div>'+
				'<div class="">'+
					'<button id="back-btn" class="arrow-box" type="button">Back to Select Dish</button>'+
				'</div>'+
				'<h3>Preparation</h3>'+
				'<div id="selected-prep"><pre>'+this.selectedDish.Instructions+'</pre></div>'+
			'</div>'+
			'<div class="col-sm-5 full-height">'+
				'<div id="ingredients-table">'+
					'<h5><b>INGREDIENTS FOR <span id="number-of-guests-2">'+model.getNumberOfGuests()+'</span> PEOPLE</b></h5>'+
					'<hr>'+
					'<div class="row">'+
						'<div id="listOfIngredients"></div>'+
					'</div>'+
					'<hr>'+
					'<div class="row" id="table-total">'+
						'<div class="col-sm-7 dinner-col">'+
							'<button data-dish-id="'+this.selectedDish.RecipeID+'" id="confirm-dish-btn" class="btn btn-default btn-lg" type="button">Confirm Dish</button>'+
						'</div><div class="col-sm-2 dinner-col">'+
							'SEK'+
						'</div><div id="dish-price" class="col-sm-3 dinner-col">'+
							//Next plus sign drops extra zeroes at end of number
							+(model.getDishPrice(this.selectedDish)).toFixed(2)+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>');

			this.ingredientsTable = container.find("#listOfIngredients");
			var ingredients = this.selectedDish.Ingredients; 
			for ( var i = 0; i < ingredients.length; i++ ) {
				this.ingredientsTable.append(
					'<div class="row">'+
						'<div class="col-sm-2 dinner-col">'+
							//Next plus sign drops extra zeroes at end of number
							+(ingredients[i].MetricQuantity*model.getNumberOfGuests()).toFixed(2)+' '+ingredients[i].MetricUnit+
						'</div><div class="col-sm-5 dinner-col">'+
							ingredients[i].Name+
						'</div><div class="col-sm-2 dinner-col">'+
							'SEK'+
						'</div><div class="col-sm-3 dinner-col">'+
							//Next plus sign drops extra zeroes at end of number
							+(ingredients[i].MetricQuantity*model.getNumberOfGuests()).toFixed(2)+
						'</div>'+
					'</div>'
				);
			}
		}
	}
	
}
 
