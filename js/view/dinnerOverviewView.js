//DinnerOverviewView Object constructor
var DinnerOverviewView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that respond to interaction)
	this.dinnerOverview = container.find("#dinner-overview");

	//Add this view as an observer of model
	model.addObserver(this);

	this.showView = function() {
		this.dinnerOverview.html(
			'<div class="container">'+
				'<div class="row" id="my-dinner-bar">'+
					'<div class="col-sm-9 dinner-col">'+
						'<h3 class="my-dinner-head">My Dinner: <span id="number-of-guests"></span> people</h3>'+
					'</div>'+
					'<div class="col-sm-3 dinner-col no-side-padding">'+
						'<button id="edit-dinner-btn" class="arrow-box" type="button">Go back and edit dinner</button>'+
					'</div>'+
				'</div>'+
			'</div>	'+		
			'<div id="dinner"></div>'+
			'<div id="after-dinner">'+
				'<hr>'+
				'<button id="print-btn" class="btn btn-default btn-lg" type="button">Print Full Recipe</button>'+
			'</div>'
		);

		this.dinner = container.find("#dinner");
		var fullMenu = model.getFullMenu();
		for ( var i = 0; i < fullMenu.length; i++ ) {
			this.dinner.append(
				'<div class="dish">'+
				'<div class="dish-head">'+
				'<img src="images/'+fullMenu[i].image+'" alt="'+fullMenu[i].name+'">'+
				'<span class="dish-name">'+fullMenu[i].name+'</span></div>'+
				'<div class="dish-cost"><b>'+model.getDishPrice(fullMenu[i].id)+' SEK</b></div>'+
				'</div>'
				);
		}

		this.dinner.append(
		'<div class="vert-line"></div>'+
		'<div class="total-price">'+
			'Total:<span class="price-text"><br>'+model.getTotalMenuPrice()+' SEK</span>'+
		'</div>'
		)
	}
}
 
