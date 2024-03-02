
var randomNum1 = Math.floor(Math.random() * 6) + 1;

var randomDice = "images/" + "dice" + randomNum1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDice);

var randomNum2 = Math.floor(Math.random() * 6) + 1;

var randomDice2 = "images/" + "dice" + randomNum2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDice2); 

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "🚩Player one wins!";
}

else if(randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
}
else{
    document.querySelector("h1").innerHTML = "It is a 🏁 draw!";   
}