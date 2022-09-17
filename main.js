var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImage1 = "images/dice"+randomNumber1+".png";
var randomImage2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImage1);
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerText = "Player 1 Win! 💥";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerText = "Player 2 Win! 💥";
}
else{
    document.querySelector("h1").innerText = "💥 It's Tie! 💥"
}



