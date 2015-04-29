$(document).ready(function() {

	// Read This First!!!
	// Currently, the MixItUp Plugin doesn't like using Classes when dealing 
	// with basic jQuery commands such as fadeIn and fadeTo. So instead, we 
	// will have to use IDs to animate all HTML objects.



	// Enables MixtItUp Plugin
	$('#mix').mixItUp();

	// First Group of Buttons Fade Into View
	$("#group_1").fadeIn("fast");

	// When First Button is clicked, the next set of buttons appear
	$('#odd_1').click(function(){
		$('#group_1').fadeOut('slow');
		$('#group_2').delay(500).fadeIn('slow');
	});

	$('#even_1').click(function(){
		$('#group_1').fadeOut('slow');
		$('#group_3').delay(500).fadeIn('slow');
	});


	// When the final button is clicked, the answers appear
	$('#odd_final_1').click(function(){
		$('#mix').fadeTo('slow', 1);
		$('#group_2').fadeOut('slow');
		$('#reset').delay(500).fadeIn('slow');
	});

	$('#odd_final_2').click(function(){
		$('#mix').fadeTo('slow', 1);
		$('#group_2').fadeOut('slow');
		$('#reset').delay(500).fadeIn('slow');
	});

	$('#even_final_1').click(function(){
		$('#mix').fadeTo('slow', 1);
		$('#group_3').fadeOut('slow');
		$('#reset').delay(500).fadeIn('slow');
	});

	$('#even_final_2').click(function(){
		$('#mix').fadeTo('slow', 1);
		$('#group_3').fadeOut('slow');
		$('#reset').delay(500).fadeIn('slow');
	});

	// Making the Reset Button to Refresh the Page
	$('#reset').click(function() {
    	location.reload();
	});


});