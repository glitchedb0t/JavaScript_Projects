// This function creates a dictionary of ice cream flavors by color
function my_Dictionary() {
    var iceCreamFlavors = {
        Brown: "Chocolate",
        White: "Vanilla",
        Pink: "Strawberry",
        Green: "Pistachio",
        Orange: "Creamsicle",
        Yellow: "Lemon",
        Blue: "Bubblegum"
    }

    // This line of code deletes the key Pink which removes the value Strawberry from the dictionary
    delete iceCreamFlavors.Pink;

    // This line of code identifies the HTML element id'ed by dictionary and outputs the value paired with the Yellow key
    document.getElementById("dictionary").innerHTML = iceCreamFlavors.Pink;
}