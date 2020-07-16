var name = "Steven";
console.log(name)

var myLocation = "Atlanta"
console.log(myLocation);

var favoriteNumber = 3;
console.log(favoriteNumber);

var teams = ["Rockets","Lakers", "Warriors", "Clippers", "Blazers","Celtics","Nets"]
console.log(teams);

// while loops
var number = 10;
var otherNumber = 1;
while (otherNumber < number) {
    console.log(otherNumber);
    // otherNumber += 1;
    otherNumber = otherNumber + 1; //
}

var numberTwo = 20;
var myOtherNumber = 10;

while (myOtherNumber < numberTwo){
    console.log(myOtherNumber); // 10, 11, 12, 
    myOtherNumber += 1; // 11, 12, 13


}


var numberThree = 5;
var myOtherNumberTwo = 15;

while (myOtherNumberTwo < numberThree){
    console.log(myOtherNumberTwo); 
    myOtherNumberTwo += 1; 


}

// for loops

for (var i = 0; i < 10; i++){
    console.log(i); // 0, 1, 2, 3
}

// print teams

for (var i = 0; i < teams.length; i++) {
    var eachTeam = teams[i]; // Rockets, Lakers, Warriors ...
    console.log(eachTeam);
}

// Make an array
// Use a for loop to iterate through your array
// print each element in your array

var food = ["pizza","soup", "bread", "veggies", "fruit","yogurt","cheese"]
console.log(teams);

for (var i = 1; i < food.length; i++) {
    var foodItems = food[i];
    console.log(foodItems); 
}


const cars = ["Tesla", "Honda", "Toyota", "Ford"];
console.log(cars)

for (let i = 0; i < cars.length; i++) {
    let eachCar = cars[i]; // Tesla, 
    console.log(eachCar);
}

// var otherNumber = 1;
// otheNumber += 1;
// otherNumber = otherNumber + 1

// let i = 0;
// i = i +i;
// i += 1;
// i++:

//Objects
// key: value pairs

const steven = {
    fullName: "Steven Michaud",
    age: 27,
    myLocation: "Atlanta",
    placesTraveled: ["Louisiana", "California", "Tennessee", "Florida"] 
}


    console.log(steven);

    // myLocation
    console.log(steven.myLocation);

    //print "Tennessee"

    console.log(steven.placesTraveled[2]);

    const myReallyCoolPost = {
        username: "@generalassembly",
        likes: 1200,
        comments:["really cool post", "nice", "javascript is cool", "woah"],
        caption: "Day 3 of SEI",
        picture: "https://instagram.com/generalassembly/.....",
        shares: 12

    }
    console.log(myReallyCoolPost);

    myReallyCoolPost.location = "Atlanta";
    console.log(myReallyCoolPost);
// likes, captions, shares, comments, username, picture

// instagram post object 

function sayHello() {
    //write my code
    //write your logic
    console.log("Hello");
}

    sayHello();
    sayHello();

    // function expression
    const sayHelloAgain = function(){
        console.log("Hello Again");

    };

    sayHelloAgain();

    arrow function

    const sayHelloFinal = () => {
        console.log("Hello for the last time");

    }
    
    sayHelloFinal();

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const otherNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

    function printNumbers(array) {
        for (let i = 0; i < array.length; i++) {
            let num = array[i]; // 10, 20, 30
            
            if (num < 50) {
                console.log(" This number is less than 50: " + num)
            } else{
                console.log("This number is greater than 50: " + num);
            }
            

        }
    }
printNumbers(numbers);
printNumbers(otherNumbers);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function addNumbers(array) {
    let result = 0;

    for( let i = 0; i < array.length; i++){
        let num = array[i];//1, 2, 3, 4, 5

        result += num; // 1, 3, 6, 10, 15, ...
    }
    return result;
}

addNumbers(myNumbers)
