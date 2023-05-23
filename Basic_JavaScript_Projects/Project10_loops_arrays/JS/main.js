// This function creates a while loop that will count from 1 to 10. As long as the variable x is less than 11 the loop will continue.
function call_Loop() {
    var digit = "";
    var x = 1;

    while (x < 11) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = digit;
}

// This script takes a string variable and returns the length of the string using the length property.
var text = "So we beat on, boats against the current, borne back ceaselessly into the past."
var length = text.length;

document.getElementById("text_Length").innerHTML = length;

// This function creates a for loop that iterates through the fruits array until the length of each string is greater than y.
var fruits = ["Mango", "Pineapple", "Apple", "Watermelon", "Plum", "Cherry", "Peach"]
var content = "";
var y;

function for_Loop() {
    for (y = 0; y < fruits.length; y++) {
    content += fruits[y] + "<br>";
    }
    document.getElementById("fruit_List").innerHTML = content;
}

// This function creates an array of dog pictures and displays a string that calls a particular image in the array (3 in this case).
function array_Function() {
    var dogPicture = [];
    dogPicture [0] = "sleeping";
    dogPicture [1] = "panting";
    dogPicture [2] = "eating";
    dogPicture [3] = "barking";

    document.getElementById("array").innerHTML = "In this picture, the dog is " + dogPicture[3] + ".";
}

// This function utilizes the const keyword
function constant_Function() {
    const new_Car = {make: "Jeep", model: "Wrangler"}
    new_Car.color = "red";
    new_Car.price = "$80000"
    new_Car.interior = "leather"
    document.getElementById("constant").innerHTML = "My new car is a " + new_Car.make + " and the model is a " + new_Car.model + ".";
}

// This function utilizes a return statement
function my_Function(name) {
    return "Hi " + name;
}
document.getElementById("return").innerHTML = my_Function("Meg");

// This function creates an object utilizing the let keyword
function let_Function() {
    let final_Fantasy7 = {publisher: "Square Enix", developer: "Square"}
    final_Fantasy7.year = "1997";
    final_Fantasy7.lead = "Cloud";
    final_Fantasy7.setting = "Gaia";
    document.getElementById("game").innerHTML = "The setting of Final Fantasy 7 is " + final_Fantasy7.setting + " and the lead character is named " + final_Fantasy7.lead + ".";
}

// This function utilizes a break statement
function break_Function() {
    let output = "";
    for (let x = 1; x < 10; x++) {
        if (x === 8) { break; }
        output += "The number is " + x + "<br>";
    }
    document.getElementById("break").innerHTML = output;
}

// This function utilizes a continue statement
function continue_Function() {
    let output = "";
    for (let x = 1; x < 5; x++) {
        if (x === 2) { continue; }
        output += "The number is " + x + "<br>";
    }
    document.getElementById("continue").innerHTML = output;
}