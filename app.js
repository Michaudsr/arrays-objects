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

for (var 1 = 0; i < teams.length; i++) {
    var eachTeam = teams[i]; // Rockets, Lakers, Warriors ...
    console.log(eachTeam);
}



