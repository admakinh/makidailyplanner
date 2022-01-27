// Reference DOM Elements
var timeDisplayEl = $('#currentDay');
var timeBlockEl = $('.textarea');


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


var pastHour = currentHour;
pastHour--;

while (pastHour >= 9) {
    console.log(pastHour);
    $('.time-' + pastHour).toggleClass('present', false).toggleClass('past', true).toggleClass('future', false);
    pastHour--;
}

var futureHour = currentHour;
futureHour++;
while (futureHour <= 24) {
    console.log(futureHour);
    $('.time-' + futureHour).toggleClass('present', false).toggleClass('past', false).toggleClass('future', true);
    futureHour++;
}




$('.time-' + currentHour).toggleClass('present', true).toggleClass('past', false).toggleClass('future', false);






















// display time each second
setInterval(displayTime, 1000);