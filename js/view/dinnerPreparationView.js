//ScreenAfterView Object constructor
var DinnerPreparationView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that respond to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.dinnerPreparation = container.find("#dinner-preparation");
	this.menuHead = container.find("#menu-head");
	
	this.numberOfGuests.val(model.getNumberOfGuests());

	this.numberOfGuests.html(model.getNumberOfGuests());

	this.showView = function() {
		this.dinnerPreparation.append(
			'<div class="container">'+
				'<div class="row" id="my-dinner-bar">'+
					'<div class="col-sm-9 dinner-col">'+
						'<h3 class="my-dinner-head">My Dinner: <span id="number-of-guests"></span> people</h3>'+
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
		this.dinnerPreparation.append(
			'<div class="row">'+
				'<div id="dishDiv" class="col-sm-3 dinner-col">'+
					'<span id="dishImage"><img src="images/'+fullMenu[i].image+'" alt="'+fullMenu[i].name+'"></img></span></div>'+
				'<div class="col-sm-4 dinner-col">'+
					'<h3>'+fullMenu[i].name+'</h3></div>'+
				'<div class="col-sm-5 dinner-col">'+
					'<h3>Preparation</h3>'+
					'<div class="dish-descr"><p>'+fullMenu[i].description+'</p></div></div>'+
			'</div>'
		);
	}
}
 
