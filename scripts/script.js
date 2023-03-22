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


// let radius;
// do{
//     radius = prompt("Enter the radius of a circle");
//     if(isNaN(radius)){
//         alert("Not a valid radius")
//     }
//     
//     alert(`The area of a circle with radius ${radius} is ${area(radius)}`);
//     
// }
// while(isNaN(radius))
// let area = (radius=0) => {
//     return radius * radius * Math.PI;
// }
// radius = prompt("Enter the radius of a circle");

// const radiuspara = document.querySelector("#radius");
// const resultpara = document.querySelector("#result");
// radiuspara.textContent += radius;
// if (isNaN(radius)) {
//     result.textContent = "ERROR: Invalid radius";
// }
// else
//     result.textContent = `The area of a circle with radius ${radius} is ${area(radius)}`;
function addToShop(list){
    //1. select and store a ref to the ul -> querySelector
    //2. loop through the list -> for loop
    //3. create an li -> createElement
    //4. append the li to the ul -> parent.appendChild(child)
    //5. update the textContent of the li with array item
    const shoppingList = document.querySelector(".shopping");
    for (let item of list) {
        const newLi = document.createElement("li");  
        shoppingList.appendChild(newLi);
        newLi.textContent = item;
    }   
}
newList = ["apple", "banana", "orange"];
addToShop(newList);