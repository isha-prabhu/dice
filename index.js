
var random1 , random2;



random1 = Math.floor(Math.random()*6)+1;
random2 = Math.floor(Math.random()*6)+1;

var randomImage1= "./images/dice"+random1+".png";
var randomImage2= "./images/dice"+random2+".png";

document.querySelector(".img1").setAttribute("src",randomImage1);
document.querySelector(".img2").setAttribute("src",randomImage2);


if(random1 > random2 ){
    
document.querySelector("h1").textContent= "Player 1 Wins!";
}
else if(random2 >random1){
    document.querySelector("h1").textContent= "Player 2 Wins!";
}
else if(random2 == random1){
    document.querySelector("h1").textContent= "It's a Tie!";
}

