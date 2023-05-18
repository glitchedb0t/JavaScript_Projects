// Uses the typeof operator to display the datatype 
document.write(typeof "Word");

// Uses type coercion to combine a number and a string
document.write(100 + "2");

// Uses the == operator
document.write((5+5) == 10);

document.write((6+2) == 9);

// Uses the not operator
function not_Function() {
    document.getElementById("not").innerHTML = ! (10 > 10);
}

// Uses the < operator
console.log(2<8);

// Uses the > operator
console.log(4>5);

// Uses the === operator
console.log('String' === 'String');
console.log(3 === 'String');
console.log(3 === '3');
console.log('String' === 'Strings'); 

// Uses the && operator
console.log((10 > 2) && (11 > 5));
console.log((24 > 12) && (3 > 5));

// Uses the || operator
console.log((7 > 1) || (4 > 9));
console.log((28 > 88) || (71 > 100));