$(document).ready(function() {
	// Trigger Menu
	$(".menu-trigger").click(function(){
		$(this).toggleClass("menu-trigger--open");
		$(".menu").toggleClass("menu--open");
	});
});
