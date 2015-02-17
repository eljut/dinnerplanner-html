//ScreenAfterView Object constructor
var MyDinnerTabView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that respond to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishes = container.find("#dishes");
	this.dishType = container.find("#dish-type");
	this.totalCost = container.find("#total-cost");
	this.myDinner = container.find("#my-dinner");
	
	this.numberOfGuests.val(model.getNumberOfGuests());
	this.totalCost.html(model.getTotalMenuPrice());

	this.showView = function() {
		this.myDinner.addClass("col-sm-3 full-height");

		this.myDinner.append(
					'<h3>My Dinner</h3>'+
					'<div>'+
						'<label for="number-of-guests">People</label>'+
						'<input type="number" step="1" name="People" id="number-of-guests" value="'+model.getNumberOfGuests()+'">'+
					'</div>'+
					'<div id="menu-head" class="row th">'+
						'<div class="col-sm-3 dinner-col">'+
							'Dish'+
						'</div>'+
						'<div class="col-sm-6 dinner-col">'+
							'Name'+
						'</div>'+
						'<div class="col-sm-3 dinner-col">'+
							'Cost'+
						'</div>'+
					'</div>'
		);

		// Add dishes to menu
		var menu = model.getFullMenu();
		for ( var i = 0; i < menu.length; i++ ) {
			this.myDinner.append(
					'<div class="row menu-item"><a href="#remove" title="Remove" class="remove">X</a>'+
						'<div class="col-sm-3 dinner-col">'+
							menu[i].id+
						'</div>'+
						'<div class="col-sm-6 dinner-col">'+
							menu[i].name+
						'</div>'+
						'<div class="col-sm-3 dinner-col">'+
							model.getDishPrice(menu[i].id)+
						'</div>'+
					'</div>'
			);
		}

		this.myDinner.append(
					'<div class="row">'+
						'<div class="col-sm-3 dinner-col">'+
						'</div>'+
						'<div class="col-sm-6 dinner-col">'+
							'Pending'+
						'</div>'+
						'<div class="col-sm-3 dinner-col">'+
							'0.00'+
						'</div>'+
					'</div>'+
					'<hr>'+
					'<div class="right-aligned">'+
						'SEK <span id="total-cost">0.00</span>'+
					'</div>'+
					'<div class="confirm-div">'+
						'<button id="confirm-dinner-btn" class="btn btn-default btn-lg" type="button">Confirm dinner</button>'+
					'</div>'+
					'</div>'
		);
						
	}			
}
 
