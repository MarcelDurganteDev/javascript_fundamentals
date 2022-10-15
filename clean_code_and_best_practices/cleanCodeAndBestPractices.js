// Best practice: Always declare the function first and then execute it instead of relying on JavaScript Hoisting.

var num1 = 10;
var num2 = 20;

// var result = add (num1, num2)  // ==> 30 [Executing before declaring]

function add(param1, param2) {
    return param1 + param2 ;
}

var result = add(num1, num2); 

