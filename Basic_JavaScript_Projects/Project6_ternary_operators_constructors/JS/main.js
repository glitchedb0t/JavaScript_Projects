// This function utilizes a ternary operation using information from the browser to determine if a person is old enough to vote.
function vote_Function() {
    var age, can_Vote;
    age = document.getElementById("age").value;
    can_Vote = (age < 18) ? "You are not old enough" : "You are old enough";
    document.getElementById("vote").innerHTML = can_Vote + " to vote."
}

// Platform is a constructor function that uses this keywords.
function Platform(Company, Name, Year, Color) {
    this.Console_Company = Company;
    this.Console_Name = Name;
    this.Console_Year = Year;
    this.Console_Color = Color;
}
// The new keyword creates an object of the Platform function with values defined.
var Playstation = new Platform("Sony", "Playstation 5", "2020", "White and Black");

// The console_Function is called on click of a button in the browser to display the results of the constructor function.
function console_Function() {
    document.getElementById("keywords_and_constructors").innerHTML = "The fifth generation console from " + Playstation.Console_Company + " is called the " + Playstation.Console_Name + " and it released in " + Playstation.Console_Year + ". Its color is " + Playstation.Console_Color;
}

// This is a function that includes a nested function that will decrease from one starting at 7.
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 7;
        function Minus_one() {Starting_point -= 1;}
        Minus_one();
        return Starting_point;
    }
}