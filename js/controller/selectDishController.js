//SelectDishController Object constructor
var SelectDishController = function (view,model,stateController) {

	//Change Dishes by type
	view.container.on("change", "#dish-type", function(event) {
		console.log("---Changing dishes by dish type: "+this.value);
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
		view.showLoading();
		model.getAllDishes(type,filter);
	}

}
