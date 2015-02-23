//ScreenAfterView Object constructor
var DinnerPreparationView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that respond to interaction)
	this.container = container;

	this.showView = function() {
		this.container.append(
			'<div class="container">'+
				'<div class="row" id="my-dinner-bar">'+
					'<div class="col-sm-9 dinner-col">'+
						'<h3 class="my-dinner-head">'+
							'My Dinner: <span id="number-of-guests">'+
								model.getNumberOfGuests()+
							'</span> people'+
						'</h3>'+
					'</div>'+
					'<div class="col-sm-3 dinner-col no-side-padding">'+
						'<button id="edit-dinner-btn" class="arrow-box" type="button">Go back and edit dinner</button>'+
					'</div>'+
				'</div>'+
			'</div>	'
		);
		//Select dish
		var fullMenu = model.getFullMenu();
		for ( var i = 0; i < fullMenu.length; i++ ) {
			this.container.append(
				'<div class="row">'+
					'<div id="dish-div" class="col-sm-3 dinner-col">'+
						'<span id="dish-image"><img src="images/'+fullMenu[i].image+'" alt="'+fullMenu[i].name+'"></img></span>'+
					'</div>'+
					'<div class="col-sm-4 dinner-col">'+
						'<h3>'+fullMenu[i].name+'</h3>'+
					'</div>'+
					'<div class="col-sm-5 dinner-col">'+
						'<h3>Preparation</h3>'+
						'<div class="dish-descr"><p>'+fullMenu[i].description+'</p></div>'+
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
 
