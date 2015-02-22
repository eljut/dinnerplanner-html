//NavbarView Object constructor
var NavbarView = function (container,model) {

	this.container = container;

	container.html(
		'<nav class="navbar navbar-default navbar-transparent">'+
			'<div class="container-fluid">'+
				'<div class="navbar-header">'+
				  '<a id="home-button" class="navbar-brand" href="#">HOMELETTE</a>'+
				'</div>'+
				'<p class="navbar-text">From the best chefs in the world directly into your kitchen</p>'+
			'</div><!-- /.container-fluid -->'+
		'</nav>'
	);

	this.homeButton = container.find(".navbar-brand");
	this.nav = container.find("nav");
	
	this.makeTransparent = function() {
		this.nav.addClass("navbar-transparent");
	}

	this.makeOpaque = function() {
		this.nav.removeClass("navbar-transparent");
	}
}
