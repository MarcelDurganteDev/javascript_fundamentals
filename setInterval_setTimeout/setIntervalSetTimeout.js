/* const logMessage = (message) => {
  document.getElementById("timer").textContent = message;
  setTimeout(() => {
    document.getElementById("timer").textContent = "";
  }, 1000);
  setTimeout(() => {
    logMessage(message);
  }, 2000);
};

window.addEventListener("load", logMessage("marcel")); */
/* let message = 'Marcel'

const logMessage = (message) => {
  document.getElementById("timer").textContent = message;
};

const displayMessageInterval = setInterval(() => {
    logMessage(message)
    //console.log(message);
}, 2000)


const initEraseDisplayTimeout = setTimeout(() => {
    setInterval(() => {
        document.getElementById('timer').textContent = '';
        //console.log('clear');
    }, 2000);
}, 1000)

setTimeout(() => {
  clearTimeout(initEraseDisplayTimeout);
  clearInterval(displayMessageInterval);
  document.getElementById('timer').textContent = 'Message Over';
},10000)

// With arguments:


function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John */

/** instead of:
let timerId = setInterval(() => alert('tick'), 2000);
*/

/* let timerId = setTimeout(function tick() {
  alert('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000); */

/* The setTimeout above schedules the next call right at the end of the current one (*).

The nested setTimeout is a more flexible method than setInterval. This way the next call may be scheduled differently, depending on the results of the current one.

For instance, we need to write a service that sends a request to the server every 5 seconds asking for data, but in case the server is overloaded, it should increase the interval to 10, 20, 40 seconds…

Here’s the pseudocode: */

/* let delay = 5000;

let timerId = setTimeout(function request() {
  ...send request...

  if (request failed due to server overload) {
    // increase the interval to the next run
    delay *= 2;
  }

  timerId = setTimeout(request, delay);

}, delay); */

/* Nested setTimeout allows to set the delay between the executions more precisely than setInterval.

Let’s compare two code fragments. The first one uses setInterval: */

/* let i = 1;
setInterval(function() {
  func(i++);
}, 100); */

// The second one uses nested setTimeout:

/* let i = 1;
setTimeout(function run() {
  func(i++);
  setTimeout(run, 100);
}, 100);
 */
/* For setInterval the internal scheduler will run func(i++) every 100ms:

The nested setTimeout guarantees the fixed delay (here 100ms).

That’s because a new call is planned at the end of the previous one. */

/* 
In the code below there’s a setTimeout call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.

When will the scheduled function run?

After the loop.
Before the loop.
In the beginning of the loop.
What is alert going to show? */


let i = 0;

setTimeout(() => alert(i), 100); // ?

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100; j++) {
  i++;
} 

/* Any setTimeout will run only after the current code has finished.

The i will be the last one: 100. */