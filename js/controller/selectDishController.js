//SelectDishController Object constructor
var SelectDishController = function (view,model,stateController) {

	//http://learn.jquery.com/events/event-delegation/

	//Change Dishes
	view.container.on("change", "#dish-type", function(event) {
		console.log("---Changing dishes by dish type!");
		console.log("Value: " + $(this).val() + "!");
		var allDishes = model.getAllDishes($(this).val());
		$("#dishes").html("");
		for ( var i = 0; i < allDishes.length; i++ ) {
			$("#dishes").append(
				'<div class="dish" data-dish-id="'+allDishes[i].id+'">'+
					'<div class="dish-head">'+
						'<img src="images/'+allDishes[i].image+'" alt="'+allDishes[i].name+'">'+
						'<span class="dish-name">'+allDishes[i].name+'</span>'+
					'</div>'+
					'<div class="dish-descr">'+allDishes[i].description+'</div>'+
				'</div>'
				);
		}
	});

	view.container.on("click", ".dish-head", function(event) {
		var id = $(this).parent().data("dish-id");
		console.log("Clicked dish with id "+id);
		//model.addDishToMenu(id);
		stateController.showSelectedDish(id);
	});
}
