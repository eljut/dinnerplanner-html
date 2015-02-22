//SelectDishController Object constructor
var SelectDishController = function (view,model,stateController) {

	//http://learn.jquery.com/events/event-delegation/

	//Change Dishes by type
	view.container.on("change", "#dish-type", function(event) {
		console.log("---Changing dishes by dish type!");
		console.log("Value: " + this.value + "!");
		showDishes(this.value);
	});

	//Search when search-button is clicked
	view.container.on("click", "#search-button", function(event) {
		var keyWords = view.container.find("#search-bar").val();
		var type = view.container.find("#dish-type").val();

		console.log("---Searching with key words: "+keyWords+" and type: "+type+"\n");

		showDishes(type,keyWords);
	});

	//Search when enter is pressed in search-bar
	view.container.on("keydown", "#search-bar", function(event) {
		if(event.which == 13) {
			var keyWords = view.container.find("#search-bar").val();
			var type = view.container.find("#dish-type").val();

			console.log("---Searching with key words: "+keyWords+" and type: "+type+"\n");

			showDishes(type,keyWords);
		}
	});

	//Show the clicked dish
	view.container.on("click", ".dish-head", function(event) {
		var id = $(this).parent().data("dish-id");
		stateController.showSelectedDish(id);
	});

	//Shows all dishes of stated type. Can be filtered.
	var showDishes = function(type,filter) {
		var allDishes = model.getAllDishes(type,filter);
		var dishes = view.container.find("#dishes");
		dishes.html("");
		for ( var i = 0; i < allDishes.length; i++ ) {
			dishes.append(
				'<div class="dish" data-dish-id="'+allDishes[i].id+'">'+
					'<div class="dish-head">'+
						'<img src="images/'+allDishes[i].image+'" alt="'+allDishes[i].name+'">'+
						'<span class="dish-name">'+allDishes[i].name+'</span>'+
					'</div>'+
					'<div class="dish-descr">'+allDishes[i].description+'</div>'+
				'</div>'
				);
		}
	}

}
