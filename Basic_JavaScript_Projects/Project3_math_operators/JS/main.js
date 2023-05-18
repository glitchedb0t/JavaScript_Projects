// This function adds the numbers 10 and 7 together.
function addition_Function() {
    var addition = 10 + 7;
    document.getElementById("math1").innerHTML = "10 + 7 = " + addition; 
}

// This function subtracts 11 from 2.
function subtraction_Function() {
    var subtraction = 11 - 2;
    document.getElementById("math2").innerHTML = "11 - 2 = " + subtraction;
}

// This function multiplies the numbers 100 and 3.
function multiplication_Function() {
    var multiplication = 100 * 3;
    document.getElementById("math3").innerHTML = "100 x 3 = " + multiplication; 
}

// This function divides 15 by 5.
function division_Function() {
    var division = 15 / 5;
    document.getElementById("math4").innerHTML = "15 / 5 = " + division;
}

// This function performs a series of basic math operations.
function simpleMath_Function() {
    var multiple = (5 + 5) * 300 / 2 - 100;
    document.getElementById("math5").innerHTML = "Five plus five times three hundred divided by two minus one hundred is equal to " + multiple;
}

// This function determines the remainder of 33 being divided by 2.
function modulus_Function() {
    var remainder = 33 % 2;
    document.getElementById("math6").innerHTML = "When you divide 33 by 2 you have a remainder of " + remainder;
}

// This function gets the negative of the negation variable.
function unary_Function() {
    var negation = 100;
    document.getElementById("math7").innerHTML = -negation;
}

// This increases the variable by 1.
var increase = 6;
increase++;
document.write(increase);

// This decreases the variable by 1.
var decrease = 1;
decrease--;
document.write(decrease);

// This method returns a random number between 0 and 100.
window.alert(Math.random() * 100);

// This method returns the square root of 81.
var square = 81;
document.write(Math.sqrt(square));