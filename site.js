$(document).ready(function() 
{
	var grid = $("section.grid-1");
    var dayOfTheMonth = (new Date()).getDate();
    //dayOfTheMonth = 14; // debugging

	for(i = 1; i <= 24; i++)
    {
		var day = $("<div></div>");
		day.addClass("day-" + i);

        var label = $("<div class='label'></div>").attr("day", i);
		var door = $("<div class='door'></div>");
		var front = $("<div class='front'></div>").text(i);
        var back = $("<div class='back'></div>").text(i);

        if (i <= dayOfTheMonth)
            front.addClass("finished");

		door.append(front, back);
		label.append(door);
		day.append(label);
        grid.append(day);

        if (i > dayOfTheMonth)
            label.attr("disabled", true);
	}

    $(".label").on("click", function () 
    {

        var isChecked = $(this).hasClass('checked');
        var isDisabled = $(this).attr('disabled');

        if (isDisabled)
            return;

        if (isChecked) 
        {
            $(".title").removeClass("showDetails");
            $(".label").removeClass("checked");

            // stop video playback
            $("#videoOfTheDay").prop("src", "");
        }
        else {
            $(".label").removeClass("checked");
            $(this).addClass("checked");
            $(".title").addClass("showDetails");

            var day = $(this).attr("day");

            if (isVdieo(day))
            {
                $("#imageOfTheDay").hide();
                $("#videoOfTheDay").show();
                
                $("#videoOfTheDay").prop("src", "img/video-" + day + ".mp4");
            }
            else
            {
                $("#videoOfTheDay").hide();
                $("#imageOfTheDay").show();

                // set new source
                $("#imageOfTheDay").prop("src", "img/pic-" + day + ".jpg");
                
                // stop video playback
                $("#videoOfTheDay").prop("src", "");
            }
        }
    });

    function isVdieo(day)
    {
        if (day == 5 || 
            day == 7)
            return true;
        else
            return false;
    }
}); 