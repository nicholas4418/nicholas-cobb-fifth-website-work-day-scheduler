//jquery call that will only run the wrapped code once the DOM is ready
$(document).ready(function () {

    //currentDate var will display the current day, month, and day number
    var currentDate = moment().format('dddd, MMMM do');
    $("#currentDay").text(currentDate);

    //logic for saving user input and its time to local storage
    $(".saveBtn").on("click", function () {
        var time = $(this).parent().attr("id");
        var input = $(this).siblings(".description").val();
        localStorage.setItem(time, input)
    })
    //loop for timeblocks, allows for determining past, present, and future
    $(".time-block").each(function () {
        var currentHour = moment().hours();
        var blockId = $(this).attr("id");
        var blockHour = blockId.slice(5);

        if (blockHour < currentHour) {
            $(this).addClass("past")
        } else if (blockHour == currentHour) {
            $(this).addClass("present")
        } else {
            $(this).addClass("future")
        }
    })

    //logic for retreiving text from local storage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
})

