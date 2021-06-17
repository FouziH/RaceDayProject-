// Race Day
// Codecademy’s annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.
//
// As a timeline, registration would look like this:registration-timeline
//
// Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.
//
// Race number:
//
// Early adults receive a race number at or above 1000.
// All others receive a number below 1000.
// Start time:
//
// Adult registrants run at 9:30 am or 11:00 am.
// Early adults run at 9:30 am.
// Late adults run at 11:00 am.
// Youth registrants run at 12:30 pm (regardless of registration).
// But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project

//-------------------------------Start Here----------------------------------------------------

// 1. Race numbers are assigned randomly. We’ve provided the necessary code at the top of the file.
let raceNumber = Math.floor(Math.random() * 1000);
//
// Check off this task after reading that line.
//
// You can read the hint if you want to learn how it works!


// 2. Create a variable that indicates whether a runner registered early or not.

// Set it equal to a Boolean value. You’ll change this later as you test different runner conditions.

let runnerRegisteredEarly = false;


// 3.Create a variable for the runner’s age and set it equal to a number.
// You’ll change this later as you test different runner conditions.

let runnerAge = 19;



//4. Create a control flow statement that checks whether the runner is an adult AND registered early.

//Add 1000 to their raceNumber if this is true.


// 5. Create a separate control flow statement below the first (starting with if again).
// This statement will check age and registration time to determine race time.
// For runners over 18 who registered early,
// log a statement to the console telling them that they will race at 9:30 am. Include their raceNumber.


// 6.“Late adults run at 11:00 am”
//
// Since we already checked for early adults we can write a statement like this: else if runner is over 18 AND did not register early they will race at 11:00am
//
// Write the corresponding else if statement.
//
// Within that, log a string to the console telling them that they will race at 11:00 am. Include their raceNumber.
//

// 7. “Youth registrants run at 12:30 pm (regardless of registration)”
//
// For people who are under 18, log a statement to the console telling them that they will race at 12:30 pm. Include their raceNumber.


// 8.Enter different combinations of values for the two variables you created and run your code several times. Verify that the correct statements are printing to the console!
//
// You can check your work using the examples provided in the hint.


// 9.Don’t forget about runners exactly 18 years old!
//
// Add an else statement that logs a statement to the console telling the runner to see the registration desk.
//-----Answer to question 4 to 9, please reveiw the code below-------------




if(runnerAge >=18 && !runnerRegisteredEarly){
  raceNumber+= 1000;
}
let time = "9:30 am"
if(runnerAge > 18 && runnerRegisteredEarly === true  ){
  console.log(`You are scheduled to run at ${time} and your race number is ${raceNumber} `)
} else if(runnerAge > 18 &&
!runnerRegisteredEarly ){
  time = "11:00 am"
console.log(`You are schedule to run at ${time} and your race number is ${raceNumber}`)
}else if(runnerAge < 18){
  time = "12:30 pm"
  console.log(`You are scheduled to run at ${time} and your race number is ${raceNumber}`)
}else {
  console.log("Please see the registation desk for more information.")
}
