console.log('Ready to go!');

// NOTE: Use Arrow function syntax when adding event listeners!

// PRO TIP: A string is nothing more than an array of characters
const main = () => {


  // Exercise 1:
  // Create a page with a blank label and a text area. 
  // When someone types into the text area, change the label to show what the person has typed.

    let label = document.getElementById('blank-label');
    let input = document.getElementById('input');
    let button = document.getElementById('submit');
    let display = document.getElementById('text-display');
    let resetButton = document.getElementById('reset-button');


  //   Exercise 2:
  // Using the exercise above, replace the user's typing with the string below. 
  // Each time they press a key, a letter from the string below should display in the label instead. 
  // There's no need to have the text start over from the beginning.

  // let codeCrewString = "Code School is a hands-on class
  //  designed to train individuals to be entry-level software developers within a six-month course.
  //   The minimum education requirement is at least a high school diploma or GED.
  //    Students work in a small classroom setting and use real-word technologies 
  //    to learn the fundamentals of coding, app development, the leadership,
  //     and the life skills needed for a successful career and job market competitiveness.

 

button.addEventListener('click', function(){

//  input = (document.write("Code School is a hands-on class"));
     display.innerHTML = input.value = ("Code School is a hands-on class designed to train individuals to be entry-level software developers within a six-month course. The minimum education requirement is at least a high school diploma or GED. Students work in a small classroom setting and use real-word technologies.to learn the fundamentals of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness. ");
});

  // Exercise 3:
  // Enhance your solution by creating a reset button that will erase everything from the label
  //  so the user can start over.

  // I included in a form in html rather than JavaScript.

  // Exercise 4: Repeating timer
  // Create a button with the text Start Countdown!.
  //  When the User clicks the button, display a countdown sequence in the browser 
  //  as an <h2> from 10 to LIFTOFF!!. 
  //  Display each number during the countdown each second (1000 ms),
  //   leading up to the word LIFTOFF!!!. Be sure to stop the timer once liftoff achieved.

  // Not done.
  function timer(){
    var sec = 30;  // count of seconds, which is 30 seconds.
    var timer = setInterval(function(){   // added another function to set timer, more of a promises
        document.getElementById('timer').innerHTML='00:'+sec; // sets in seconds
        sec--;  // negatives make it count down to 0.
        if (sec < 0) {
            clearInterval(timer); // sets interval to stop timer at 0.
            console.log("liftoff!");  // set in console
        }
    }, 1000); // milliseconds to count down
}
timer() // calls the function to work as a time clock.

  //   Challenge 1
  // Create additional strings and load them in an array
  // then randomly select one of the three each time the page is reloaded.




};

main();
