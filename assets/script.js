// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

/* The code below -- $ function () {}; -- is a shorthand syntax for the $(document).ready() function. 
It is used to execute code when the DOM (Document Object Model) is fully loaded and ready to be manipulated/browser has finished
rendering all elements in HTML. */

$(function () {
    // wW are initializing the variable at 9 because that's the first hour we will code through. This will stop at 17/5PM.
    // We navigate through the DOM through the tree structure, this way we don't have to hardcode each time block.
    // I kept both syntaxes for hour + i, because this is my first time using ${}, and I want to remind myself what it means.
    for (let i = 9; i <= 17; i++) {
        /* Here, we are saying for every id "hour-" block, we will access the children elements of that element id, 
        but narrow it down to the child element "textarea." 
        We will then get the items from local storage and display that as text content inside textarea. */
        $(`#hour-` + i).children('textarea').text(localStorage.getItem(`hour-${i}`));
    };
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. 

    /* We are querySelecting the saveBtn class because every save button has this class, and it doesn't appear to be a bootstrap class,
    ie: we can manipulate it in our own CSS */
    let save = $('.saveBtn');

    // Listening for a click on the save button, which will run the function.
    save.on('click', function () {
        // Keeping the following console logs for testing
        // console.log(this);
        // console.log($(this).siblings());
        // console.log($(this).siblings('textarea'));

        /* When user clicks: we will access the textarea of "this" (referring to variable save) and  access its siblings, 
        specifically the textarea element. The click will ultimately retrieve the value of the user's text input in the textarea box.
        We will also access the save button's corresponding parent's attribute of id.
        */
        let userText = $(this).siblings('textarea').val();
        let scheduleId = $(this).parent().attr('id');
        // console.log(userText);
        // console.log($(this).parent());
        // console.log($(this).parent().attr('id'));

        //We set user's text input into local storage with the key of "hour-i" (which is derived from scheduleId variable) and the value of the user's text input.
        localStorage.setItem(scheduleId, userText)


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
