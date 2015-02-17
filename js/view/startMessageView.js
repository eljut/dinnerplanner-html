//StartMessageView Object constructor
var StartMessageView = function (container,model) {

	container.append('<div id="start-message">'+
			'<h1>A Home Dinner Service</h1>'+
			'<hr><p>'+
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'+
			'</p><span id="start-quickly">start quickly</span>'+
			'<button class="btn btn-default btn-lg" type="button">Create new dinner</button>'+
		'</div>');
}