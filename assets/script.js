/* $ function () {}; is a shorthand syntax for the $(document).ready() function, 
which ensures code isn't run until bwoser has finished rendering all HTMl. */
$(function () {
    // Note: I keep console.logs in here but commented out to demonstrate any testing that proved to be helpful
    // This function checks what time it is and then compares that time to the div's hour (which we parsed out of the id string)
    // The if statement in the function will then dynamically add classes to apply corresponding classes/css properties.
    function checkTime() {
        let currentHour = dayjs().format('H');
        // console.log(typeof currentHour); // string!
        let numberCurrentHour = parseInt(currentHour);
        // console.log(numberCurrentHour)
        // console.log(typeof numberCurrentHour)
        let timeDiv = $('.time-block');
        // console.log(timeDiv); // yields all time divs
        // console.log(timeDiv[1]); // yields hour-10 div

        timeDiv.each(function () {
            // We access each timeDiv's id attribute (eg: hour-9, etc.), then we split it (hour, 9), access index 1 (9),
            //then parse it to make it a number
            let hourId = parseInt($(this).attr('id').split('-')[1]);
            // console.log(hourId) // yields every div's hour number

            // The if statement will dynamically add classes to apply corresponding attributes.
            if (hourId === numberCurrentHour) {
                $(this).addClass('present');
            } else if (hourId < numberCurrentHour) {
                $(this).addClass('past');
            } else {
                $(this).addClass('future');
            }
            // console.log(this); //yields every div class of "time-block"
        });
    }
    //actually execute the function
    checkTime();


    // This function will show the current date and time in the header, formatted in my preference
    function showDate() {
        let dayEl = $('#currentDay');
        let day = dayjs();
        let now = day.format('dddd, M.DD.YYYY, h:mm:ss[&nbsp;]a');

        now = now.replace(/</g, "&lt;").replace(/>/g, "&gt;");

        dayEl.html(now);
    };

    showDate();
    //will display a running clock
    setInterval(showDate, 500);

    /* For loop will run through hours 9-17, looping through each i for the subsequent id/hour.
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
});