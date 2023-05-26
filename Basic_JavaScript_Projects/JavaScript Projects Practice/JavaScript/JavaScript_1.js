function foods_Function() {
    var foods_Output;
    var foods = document.getElementById("foods_Input").value;
    var foods_String = " is delicious!";

    switch(foods) {
        case "Pizza":
            foods_Output = "Pizza" + foods_String;
            break;

        case "Kale":
            foods_Output = "Kale" + foods_String;
            break;
        
        case "Mango":
            foods_Output = "Mango" + foods_String;
            break;

        case "Feta":
            foods_Output = "Feta" + foods_String;
            break;

        case "Pasta":
            foods_Output = "Pasta" + foods_String;
            break;

        default:
            foods_Output = "Please enter a food option exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = foods_Output;
}

function hello_world_Function() {
    var a = document.getElementsByClassName("click");
    a[1].innerHTML = "The text has changed!";
}

var c = document.getElementById("id_Name");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);