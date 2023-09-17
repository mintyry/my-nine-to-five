// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

/* the code below is a shorthand syntax for the $(document).ready() function. 
It is used to execute code when the DOM (Document Object Model) is fully loaded and ready to be manipulated. */




$(function () {
    for (let i = 9; i <= 17; i++) {
        $(`#hour-`+ i).children('textarea').text(localStorage.getItem(`hour-${i}`));
    };
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. 

    // let hour9 = $('#hour-9');

    // hour9.on('click', function (event) {
    //     event.preventDefault();
        
    //     let text9 = $('#text-9');
    //     let input9 = text9.val();

    //     let showInput9 = JSON.parse(localStorage.getItem('scheduled-event')) || [];;

    //     localStorage.getItem('scheduled-event');
    //     text9.text(showInput9);
    //     localStorage.setItem('scheduled-event', input9);

    //     console.log(localStorage.getItem('scheduled-event'));
    // });

let save = $('.saveBtn');

save.on('click', function () {
// console.log(this);
// console.log($(this).siblings());
// console.log($(this).siblings('textarea'));

let userText = $(this).siblings('textarea').val();
let scheduleId = $(this).parent().attr('id');
let textDiv = $(this).siblings('textarea');
// console.log(userText);

// console.log($(this).parent());
// console.log($(this).parent().attr('id'));


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
  