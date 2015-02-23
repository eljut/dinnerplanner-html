//ScreenAfterView Object constructor
var MyDinnerTabView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that respond to interaction)
	this.container = container;

	// Add this view as an observer of model
	model.addObserver(this);

	this.showView = function() {
		console.log("---Showing myDinnerTabView!");
		this.container.addClass("col-sm-3 full-height");

		this.container.append(
			'<h3>My Dinner</h3>'+
			'<div>'+
				'<label for="number-of-guests">People</label>'+
				'<input type="number" min="1" step="1" name="People" id="number-of-guests" value="'+model.getNumberOfGuests()+'">'+
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
			'</div>'+
			'<a href="#" id="menu">'+
				'<div id="menu-starter"></div>'+
				'<div id="menu-main"></div>'+
				'<div id="menu-dessert"></div>'+
			'</a'
		);

		// Add dishes to menu
		var menu = model.getFullMenu();
		var menuItemContent = '';
		for ( var i = 0; i < menu.length; i++ ) {
			menuItemContent =
				'<a href="#remove" title="Remove" class="remove" data-dish-id="'+menu[i].id+'">X</a>'+
				'<div class="col-sm-3 dinner-col">'+
					menu[i].id+
				'</div>'+
				'<div class="col-sm-6 dinner-col">'+
					menu[i].name+
				'</div>'+
				'<div class="col-sm-3 dinner-col">'+
					model.getDishPrice(menu[i].id)+
				'</div>'
			switch(menu[i].type) {
				case "starter":
					$("#menu-starter").addClass("row menu-item");
					$("#menu-starter").html(menuItemContent);
					break;
				case "main dish":
					$("#menu-main").addClass("row menu-item");
					$("#menu-main").html(menuItemContent);
					break;
				case "dessert":
					$("#menu-dessert").addClass("row menu-item");
					$("#menu-dessert").html(menuItemContent);
					break;
			}
			
		}

		this.container.append(
			'<div id="pending" class="row">'+
				'<div class="col-sm-3 dinner-col">'+
				'</div>'+
				'<div class="col-sm-6 dinner-col">'+
					'Pending'+
				'</div>'+
				'<div class="col-sm-3 dinner-col">'+
					'<span id="pending-dish">0.00</span>'+
				'</div>'+
			'</div>'+
			'<hr>'+
			'<div class="right-aligned">'+
				'SEK <span id="total-cost">'+model.getTotalMenuPrice()+'</span>'+
			'</div>'+
			'<div id="confirm-button"></div>'+
			'</div>'
		);

		this.numberOfGuests = container.find("#number-of-guests");

		if (menu.length == 0) {
			this.confirmButton = container.find("#confirm-button").empty();
			this.confirmButton.html(
				'<div class="confirm-div">'+
					'<button id="confirm-dinner-btn" class="btn btn-default btn-lg" type="button" disabled>Confirm dinner</button>'+
				'</div>'
			)} else {
				this.confirmButton = container.find("#confirm-button").empty();
				this.confirmButton.html(
					'<div class="confirm-div">'+
						'<button id="confirm-dinner-btn" class="btn btn-default btn-lg" type="button">Confirm dinner</button>'+
					'</div>'
			)}; 

	}

	this.hideView = function() {
		console.log("---Hiding myDinnerTabView!");
		this.container.removeClass("col-sm-3 full-height");
		this.container.children().remove();
	}

	this.pending = function(id) {
		this.pendingDish = container.find("#pending-dish");
		this.pendingDish.html(
			model.getDishPrice(id)
		);
	} 

	this.update = function(obj) {
		if (obj === "menuDishAdded" || obj === "menuDishRemoved" || obj === "updateNumberOfGuests") {
			
			// if (obj === "menuDishRemoved") {
			// 	if (typeof model.getSelectedDish('starter') === 'undefined') {
			// 		container.find("#menu-starter").remove();
			// 	}
			// 	if (model.getSelectedDish('main') === null) {
			// 		container.find("#menu-main").remove();
			// 	}
			// 	if (model.getSelectedDish('dessert') === null) {
			// 		container.find("#menu-dessert").remove();
			// 	}
			// }

			// Remove dishes from menu
			container.find("#menu-starter").empty();
			container.find("#menu-main").empty();
			container.find("#menu-dessert").empty();
			
			// Add dishes to menu
			var menu = model.getFullMenu();
			var menuItemContent = '';
			for ( var i = 0; i < menu.length; i++ ) {
				menuItemContent =  
					'<a href="#remove" title="Remove" class="remove" data-dish-id="'+menu[i].id+'">X</a>'+
					'<div class="col-sm-3 dinner-col">'+
						menu[i].id+
					'</div>'+
					'<div class="col-sm-6 dinner-col">'+
						menu[i].name+
					'</div>'+
					'<div class="col-sm-3 dinner-col">'+
						model.getDishPrice(menu[i].id)+
					'</div>'
				switch(menu[i].type) {
					case "starter":
						$("#menu-starter").addClass("row menu-item");
						$("#menu-starter").html(menuItemContent);
						break;
					case "main dish":
						$("#menu-main").addClass("row menu-item");
						$("#menu-main").html(menuItemContent);
						break;
					case "dessert":
						$("#menu-dessert").addClass("row menu-item");
						$("#menu-dessert").html(menuItemContent);
						break;
				}
			}

			$("#total-cost").html(model.getTotalMenuPrice());

			this.pendingDish = container.find("#pending-dish");
			this.pendingDish.html('0.00');

			this.confirmButton.html(
				'<div class="confirm-div">'+
					'<button id="confirm-dinner-btn" class="btn btn-default btn-lg" type="button">Confirm dinner</button>'+
				'</div>'
			);
		}
	}

}

