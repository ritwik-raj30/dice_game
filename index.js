var randomnumber = Math.floor(Math.random() * 6) + 1;
var randomnumber1 = Math.floor(Math.random() * 6) + 1;
document.getElementsByTagName("img")[0].src="/images/dice"+randomnumber+".png";
document.getElementsByTagName("img")[1].src="/images/dice"+randomnumber1+".png";

//  let r=prompt("enter player 1 name ");
// let name2=prompt("enter player 2 name ");
// document.getElementById("pr").innerHTML=r;
if(randomnumber>randomnumber1)
{
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}

else if(randomnumber<randomnumber1)
{
    document.querySelector("h1").textContent =  "Player2 Wins!"; 
}
else 
{
    document.querySelector("h1").textContent = "🚩 tie 🚩";
}