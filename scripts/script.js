// function greet(message){
//     console.log("Hello " + message + "!");
// }
// greet("Neda");

// let greet = (message) => {console.log("Hello " + message + "!");}
// let input = prompt("Enter your name");
// greet(input);
// greet();

// let greet = (message, time="day") => {console.log(`Good ${time} ${message}!`);}
// let input1 = prompt("Enter your name");

// greet(input1);
// greet(input1,"bye","boy","girl");
let area = (radius=0) => {
    return radius * radius * Math.PI;
}

let radius;
do{
    radius = prompt("Enter the radius of a circle");
    if(isNaN(radius)){
        alert("Not a valid radius")
    }
    else{
        alert(`The area of a circle with radius ${radius} is ${area(radius)}`);
    }
}
while(isNaN(radius))