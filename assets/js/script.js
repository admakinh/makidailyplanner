// Reference DOM Elements
var timeDisplayEl = $('#currentDay');
var timeBlockEl = $('.textarea');
var saveBtn = $('.saveBtn');


// Display the current date
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}
// sets class name for each timeblock
timeBlockEl.addClass(function (index) {
    index += 9;
    return "time-" + index;
});

var currentHour = moment().format('HH');

$('.time-' + currentHour).toggleClass('present', true).toggleClass('past', false).toggleClass('future', false);

var pastHour = currentHour;
pastHour--;

while (pastHour >= 9) {
    $('.time-' + pastHour).toggleClass('present', false).toggleClass('past', true).toggleClass('future', false);
    pastHour--;
}

var futureHour = currentHour;
futureHour++;
while (futureHour <= 24) {
    $('.time-' + futureHour).toggleClass('present', false).toggleClass('past', false).toggleClass('future', true);
    futureHour++;
}

saveBtn.click(function () {
    eventText = $(this).siblings('.input').val();
    eventTime = $(this).siblings(".hour").text();
    localStorage.setItem(eventTime, JSON.stringify(eventText));

    loadText();
});


function loadText() {
    var loopingNum = 9;
    var timeLoop = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    var loopLength = timeLoop.length;
    for (var i = 0; i < loopLength; i++) {
        var getEventText = JSON.parse(localStorage.getItem(timeLoop[i]));
        $('.time-' + loopingNum).val("");
        $('.time-' + loopingNum).val(getEventText);

        loopingNum++;
    }
}

// display time each second
loadText();
setInterval(displayTime, 1000);