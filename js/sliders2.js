var sliders = $("#sliders .slider");

sliders.each(function() {
    var value = parseInt($(this).text(), 10),
        availableTotal = 100;

    $(this).empty().slider({
        value: 0,
        min: 0,
        max: 100,
        range: "max",
        step: 5,
        animate: 100,
        slide: function(event, ui) {
            // Update display to current value
            $(this).siblings().text(ui.value +'%');

            // Get current total
            var total = 0;

            sliders.not(this).each(function() {
                total += $(this).slider("option", "value");
            });

            // Need to do this because apparently jQ UI
            // does not update value until this event completes
            total += ui.value;

            var max = availableTotal - total;

            // Update each slider
            sliders.not(this).each(function() {
                var t = $(this),
                    value = t.slider("option", "value");

                t.slider("option", "max", max + value)
                    .siblings().text(value + '%');
                t.slider('value', value);
            });
            $("#total").text(total);
			
			//Resets the sliders
			
			
        }
    });
});