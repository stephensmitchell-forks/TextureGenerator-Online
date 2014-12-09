$(".slider_area_gradient" ).click(function(evt) {
	var x = Math.min(Math.max(evt.pageX - $(this).offset().left, 0), 255);
	
	createGradientSlider(x, 'ffffff', 'gradient');
	
	updateTexture();
	//alert( "Position: " + x );
});
	
$(".slider_area_gradient").droppable({
	out: function (event, ui) {
		//document.write($(ui.draggable).position().left);
		if ($(ui.draggable).position().left < 250)
			$(ui.draggable).remove();
    }
});

createGradientSlider(0, 'e6d7c3', 'gradient');
createGradientSlider(96, '262626', 'gradient');
createGradientSlider(178, '665e52', 'gradient');

function updateGradient(){
	var colors = [];
	
	$(".slider_gradient").each(function( index ) {
		var pos = $(this).css("left");
		pos = pos.substring(0, pos.length - 2);
		var percentage = Math.min(parseFloat(pos) - 5, 255) / 2.56;
	
		colors.push([rgb2hex($(this).css("background-color")), percentage]);
	});
	
	
	gradient_type = $("select#gradient_type option:selected").val();
	//document.write(gradient_type);
	setGradientColors(colors, gradient_type, 'gradient');
}