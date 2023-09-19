/* GIVEN I am using a daily planner to create a schedule


WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future

 */


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. 

/* $ function () {}; is a shorthand syntax for the $(document).ready() function., 
which ensures code isn't run until bwoser has finished rendering all HTMl. */


$(function () {

    let currentHour = dayjs().format('H');
    console.log(currentHour);


    // maybe if statement goes in for loop
    // if (i === currentHour) {
    //     `#hour-${i}`.addClass('present')
    // }

    // else if (time < now) {
    //     'hour-${i}`.addClass('past')
    // } else {
    //     'hour-${i}`.addClass('future')
    // }

    /* can we put `hour-${i}` in a variable? I tried but code wouldn't display properly
    */


function checkTime () {
   let timeDiv = $('.time-block');
  
   console.log(timeDiv); // yields all time divs
//    console.log(hourId); //yields hour-9

   timeDiv.each(function () {
    let hourId = timeDiv.attr('id');
    console.log(hourId)
   });
}

checkTime();



    function showDate() {
        let dayEl = $('#currentDay');
        let day = dayjs();
        let now = day.format('M.DD.YYYY, hh:mm:ss a');

        dayEl.text(now);
    };

    showDate();
    setInterval(showDate, 200);

    /* For loop will run through hours 9-17, looping each i for the subsequent id/hour.
     We access elements by traversing DOM rather than hardcoding for each hour; we do this by accessing saveBtn class, which they all share,
     but isn't a bootstrap selector; we also use 'this.'
     We access what we need and use .text in order to display content in the area we selected. 
     User's entry persists upon page refresh because getItem and .text are outside of click function */
    for (let i = 9; i <= 17; i++) {
        $(`#hour-${i}`).children('textarea').text(localStorage.getItem(`hour-${i}`));
    }



    let save = $('.saveBtn');

    save.on('click', function () {
        let userText = $(this).siblings('textarea').val();
        let scheduleId = $(this).parent().attr('id');

        localStorage.setItem(scheduleId, userText)

        // Keeping the following console logs for testing
        // console.log(this);
        // console.log($(this).siblings());
        // console.log($(this).siblings('textarea'));
        // console.log(userText);
        // console.log($(this).parent());
        // console.log($(this).parent().attr('id'));
    });

    /* HINT: What does `this` reference in the click listener function? 
    How can DOM traversal be used to get the "hour-x" id of the
    time-block containing the button that was clicked? 
    How might the id be useful when saving the description in local storage? */
    //
    // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 
    /* HINTS: How can the id attribute of each time-block be used to conditionally add or remove
     the past, present, and future classes? 
     How can Day.js be used to get the current hour in 24-hour time? */
    //
    // TODO: Add code to get any user input that was saved in localStorage 
    // and set the values of the corresponding textarea elements. 
    /* HINT: How can the id attribute of each time-block be used to do this? */
    //
    // TODO: Add code to display the current date in the header of the page.
});