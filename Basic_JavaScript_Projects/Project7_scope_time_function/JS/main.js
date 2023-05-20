// Here x is a global variable that can be used by any function
var x = 10;

function add_Numbers1() {
    // Here y is a local variable to add_Numbers1 and is called below in the console.log method
    var y = 5;
    // z is also a local variable to add_Numbers1 but is called below in the add_Numbers2 function (resulting in an error)
    var z = 15;
    console.log(20 + y);
}

// This function will throw an error when called by console.log because z is not a global variable nor is it local to add_Numbers2
function add_Numbers2 () {
    console.log(z + 100);
}

// The two functions defined above are called here for debugging purposes
add_Numbers1();
add_Numbers2();

// This function will use the day date method to determine the day of the week and print a message based on the result
function day_Function() {
    var day = new Date().getDay();
    var reply;

    // Days start on Sunday and go from 0 - 6
    if (day <= 2) {
        reply = "It is the beginning of the week. Time to get in gear!";
    }
    else if (day >= 2 === 4 ) {
        reply = "It is the middle of the week. Hang in there!";
    }
    else {
        reply = "It's the weekend! Time to relax!";
    }
    document.getElementById("day_of_week").innerHTML = reply;
}