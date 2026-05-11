let hands = ["rock","paper","scissor"]

function functionRadom (){
    let randomNumber = Math.floor(Math.random()*3);
    return hands[randomNumber];
}

console.log(functionRadom());
