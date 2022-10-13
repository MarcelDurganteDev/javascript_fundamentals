function thirdFunc() {
    setTimeout(function() {
      console.log("Greetings from thirdFunc()");
    }, 5000);
  }
  
  function secondFunc() {
    thirdFunc();
    console.log("Greetings from secondFunc()");
  }
  
  function firstFunc() {
    secondFunc();
    console.log("Greetings from firstFunc()");
  }
  
  firstFunc();
  
  // Greetings from secondFunc()
  // Greetings from firstFunc()
  // approx. 5 seconds later...
  // Greetings from thirdFunc()

  /* 
  In the code above, the execution begins. When the engine reaches the third function, instead of immediately logging the message to the console, it invokes setTimeout()which is an API provided to us by the browser environment. This function accepts a "callback" function which will be stored in a structure we have not discussed yet called the callback queue. thirdFunc()will then complete it's execution, returning control to secondFunc()and firstFunc()in turn. Finally after at least 5 seconds (more on this below), the message from thirdFunc()is logged to the console. 

  FURTHER EXPLANATION

  Our code runs as above until we get to the thirdFunctionat this point, setTimeout is invoked, taken off the call-stack and begins a countdown. Our code continues on to secondFunction and firstFunction and console.logs their messages in turn. In the meantime, setTimeout completed it's countdown almost immediately - in 0 seconds - but there was no way for it to get it's callback directly onto the call-stack. Instead when it completed it's countdown, it passed the callback to the callback queue. The event loop kept checking the call-stack but during that time secondFuncand in turn firstFuncoccupied space on the call-stack. It was not until these two functions completed execution and the call-stack was emptied, that the event loop takes the callback function we passed to setTimeoutand places it on the call-stack to be executed.
  */

  // =========  IMPORTANT DEFINITION OF THE EVENT LOOP  =============

  /* 
  The call-stack is used to keep track of the currently executing function context, the callback queue keeps track of any execution contexts that need to be run at a later time. Such as a callback passed to a setTimeout function or a node async task. While our code is being invoked, the event loop periodically checks if the call-stack is empty. Once the call-stack has run all the execution contexts in our code, the event loop takes the first function that entered the callback queue and places it on the call-stack to be executed. Then repeats the process again continually checking both the call-stack and the callback queue and passing functions from the callback queue onto the call-stack once the call-stack is empty. 
  */

/* 
  =========  Other resources:  =========

  https://ui.dev/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript

  https://www.youtube.com/playlist?list=PLWrQZnG8l0E4kd1T_nyuVoxQUaYEWFgcD

  https://www.youtube.com/watch?v=8aGhZQkoFbQ

 */