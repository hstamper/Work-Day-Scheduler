
$("#9am").attr("date-time", moment("9:00am", "h:mm a").format("HH"));
$("#10am").attr("date-time", moment("10:00am", "h:mm a").format("HH"));
$("#11am").attr("date-time", moment("11:00am", "h:mm a").format("HH"));
$("#12pm").attr("date-time", moment("12:00pm", "h:mm a").format("HH"));
$("#1pm").attr("date-time", moment("1:00pm", "h:mm a").format("HH"));
$("#2pm").attr("date-time", moment("2:00pm", "h:mm a").format("HH"));
$("#3pm").attr("date-time", moment("3:00pm", "h:mm a").format("HH"));
$("#4pm").attr("date-time", moment("4:00pm", "h:mm a").format("HH"));
$("#5pm").attr("date-time", moment("5:00pm", "h:mm a").format("HH"));

var time = moment();

function setPlanner() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    $(".time-block").each(function () {
        var id = $(this).attr("id");
       
         var schedule = JSON.parse(localStorage.getItem(id));
         console.log(id, schedule);

         $(this).children(".description").val(schedule);

        // if (schedule !== null) {
        //     $(this).children(".description").val(schedule); 
        // }
    });
}

setPlanner();


$(".saveBtn").click(function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".description").val().trim();

    localStorage.setItem(time, schedule);
    
    console.log("test");
});


function pastPresentFuture() {
    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("date-time"));

        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
        else {
            $(this).addClass("past");
            $(this).removeClass("future");
        }
    })
}

pastPresentFuture();


