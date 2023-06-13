var randomNumber1 = Math.ceil(Math.random()*6)
var randomNumber2 = Math.ceil(Math.random()*6)
document.querySelector(".img1").setAttribute("src", "./images/dice"+randomNumber1+".png")
document.querySelector(".img2").setAttribute("src", "./images/dice"+randomNumber2+".png")

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="Player One Wins!"
}
else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML="Player Two Wins!"
}
else{
    document.querySelector("h1").innerHTML="It's a tie!"
}