// This function joins (or concatenates) multiple strings together
function concat_Method() {
    var x = "All that glitters "
    var y = "is not gold."
    var z = x.concat(" ", y);
    document.getElementById("join").innerHTML = z;
}

// This function slices the characters at a specified index range out of the whole string
function slice_Method() {
    var sentence = "Speak of the devil.";
    var section = sentence.slice(0,5);
    document.getElementById("slice").innerHTML = section;
}

// This function prints the string in all uppercase letters
function uppercase_Method() {
    var sentence = "Hello citizens of Mars!"
    var large = sentence.toUpperCase();
    document.getElementById("upper").innerHTML = large;
}

// This function searches for a specific part of a string and returns the index of the match
function search_Method() {
    var sentence = "I/'m Commander Shepard, and this is my favorite store on the Citadel!";
    var where = sentence.search("Shepard");
    document.getElementById("search").innerHTML = where;
}

// This function converts a number to a string
function string_Method() {
    var x = 101;
    document.getElementById("number_to_string").innerHTML = x.toString();
}

// This function formats a number to a specified length
function precision_Method() {
    var x = 3.141592653589793238462643383279502884197;
    document.getElementById("pie").innerHTML = x.toPrecision(7);
}

// This function rounds a number to a specific number of decimals
function fixed_Method() {
    var x = 8.675309;
    document.getElementById("fix").innerHTML = x.toFixed(2);
}

// This function returns the primitive value of a number
function valueOf_Method() {
    var x = 8.675309;
    document.getElementById("value").innerHTML = x.valueOf();
}