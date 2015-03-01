//ScreenAfterView Object constructor
var DinnerPreparationView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that respond to interaction)
	this.container = container;

	this.showView = function() {
		this.container.append(
			'<div class="container">'+
				'<div class="row" id="my-dinner-bar">'+
					'<div class="col-sm-9">'+
						'<h3 class="my-dinner-head">'+
							'My Dinner: <span id="number-of-guests">'+
								model.getNumberOfGuests()+
							'</span> people'+
						'</h3>'+
					'</div>'+
					'<div class="col-sm-3 no-side-padding">'+
						'<button id="edit-dinner-btn" class="arrow-box" type="button">Go back and edit dinner</button>'+
					'</div>'+
				'</div>'+
			'</div>	'
		);
		//Select dish
		var fullMenu = model.getFullMenu();
		for ( var i = 0; i < fullMenu.length; i++ ) {
			this.container.append(
				'<div class="row no-margin" id="preparation-padding">'+
					'<div id="dish-div" class="col-sm-3">'+
						'<img id="dish-image" src="'+fullMenu[i].ImageURL+'" alt="'+fullMenu[i].Title+'"></img>'+
					'</div>'+
					'<div id="dish-div" class="col-sm-4">'+
						'<h3>'+fullMenu[i].Title+'</h3>'+
						'<div><p>'+fullMenu[i].Description+'</p></div>'+
					'</div>'+
					'<div id="dish-div" class="col-sm-5">'+
						'<h3>Preparation</h3>'+
						'<div><pre>'+fullMenu[i].Instructions+'</pre></div>'+
					'</div>'+
				'</div>'
			);
		}
	}

	this.hideView = function() {
		console.log("---Hiding dinnerPreparationView!");
		this.container.removeClass("col-sm-3 full-height");
		this.container.children().remove();
	}
	
}
 
