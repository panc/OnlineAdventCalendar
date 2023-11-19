// https://webdesign.tutsplus.com/tutorials/how-to-build-a-festive-advent-calendar-with-css-grid--cms-30070

$(document).ready(function() {

	var grid = $("section.grid-1");
    var date = (new Date()).getDate();
    //date = 14; // debugging

	for(i = 1; i <= 24; i++){

		var day = $("<div></div>");
		day.addClass("day-" + i);

        var label = $("<div class='label'></div>").attr("day", i);
		var door = $("<div class='door'></div>");
		var front = $("<div class='front'></div>").text(i);
        var back = $("<div class='back'></div>").text(i);

        if (i <= date)
            front.addClass("finished");

		door.append(front, back);
		label.append(door);
		day.append(label);
        grid.append(day);

        if (i > date)
            label.attr("disabled", true);
	}

    $(".label").on("click", function () {

        var isChecked = $(this).hasClass('checked');
        var isDisabled = $(this).attr('disabled');

        if (isDisabled)
            return;

        if (isChecked) {
            $(".title").removeClass("showDetails");
            $(".label").removeClass("checked");
        }
        else {
            $(".label").removeClass("checked");
            $(this).addClass("checked");
            $(".title").addClass("showDetails");

            var day = $(this).attr("day");
            $("#imageOfTheDay").prop("src", "img/pic-" + day + ".jpg");
        }
    });
}); 