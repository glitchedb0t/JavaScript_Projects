function clickHere() { // Function declared and name assigned
    var sentence = "This is the fifth course of my bootcamp!"; // String to display is assigned the to the variable sentence
    sentence += " I am learning a lot."; // Sentence variable is concatenated with the += operator
    document.getElementById("Concatenate").innerHTML = sentence; // document.getElementById is called and passed the id of the element and is modified by the sentence variable
}