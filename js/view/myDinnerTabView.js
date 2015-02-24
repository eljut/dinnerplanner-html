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
			'<div id="menu">'+
				'<div id="menu-starter"></div>'+
				'<div id="menu-main"></div>'+
				'<div id="menu-dessert"></div>'+
			'</div>'
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
			'<div id="confirm-div"></div>'+
			'</div>'
		);

		//this.numberOfGuests = container.find("#number-of-guests");

		this.confirmDiv = container.find("#confirm-div");
		this.confirmDiv.html(
			'<button id="confirm-dinner-btn" class="btn btn-default btn-lg" type="button" disabled>Confirm dinner</button>'
		);
		if (menu.length == 0) {
			this.confirmDiv.find("#confirm-dinner-btn").attr("disabled", true);
		}
		else {
			this.confirmDiv.find("#confirm-dinner-btn").attr("disabled", false);
		}

	}

	this.hideView = function() {
		console.log("---Hiding myDinnerTabView!");
		this.container.removeClass("col-sm-3 full-height");
		this.container.children().remove();
	}

	this.setPending = function(id) {
		container.find("#pending").addClass("pending-active");
		container.find("#pending-dish").html(model.getDishPrice(id));

		//Set pending total price
		var pendingDish = model.getDish(id);
		var replacedDish = model.getSelectedDish(pendingDish.type);
		var currentMenuPrice = model.getTotalMenuPrice();
		var pendingDishPrice = model.getDishPrice(pendingDish.id);
		if(replacedDish) {
			var replacedDishPrice = model.getDishPrice(replacedDish.id);
			container.find("#total-cost").html(currentMenuPrice+pendingDishPrice-replacedDishPrice);
		} else {
			container.find("#total-cost").html(currentMenuPrice+pendingDishPrice);
		}
	}

	this.clearPending = function() {
		container.find("#pending").removeClass("pending-active");
		container.find("#pending-dish").html('0.00');
		container.find("#total-cost").html(model.getTotalMenuPrice());
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
			container.find("#menu-starter").empty().removeClass("row menu-item");
			container.find("#menu-main").empty().removeClass("row menu-item");
			container.find("#menu-dessert").empty().removeClass("row menu-item");
			
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

			container.find("#total-cost").html(model.getTotalMenuPrice());

			if (obj === "menuDishAdded") {
				this.clearPending();
			} else if (obj === "updateNumberOfGuests") {
				var dishIdContainer = $("#confirm-dish-btn");
				if(dishIdContainer.length) {
					this.setPending(dishIdContainer.data("dish-id"));
				}
			}

			if (menu.length == 0) {
				this.confirmDiv.find("#confirm-dinner-btn").attr("disabled", true);
			} else {
				this.confirmDiv.find("#confirm-dinner-btn").attr("disabled", false);
			}
		}
	}

}

