let emojis = ["🐖","😹","👽","☠","👻","🤖","🙉","🐱","🦒","🐗","🐸","🦓","🐔"]

let stageEl = document.querySelector("#stage");
let fightEl = document.querySelector("#fightbutton");

fightEl.addEventListener ("click", function() {

    randomNumber = Math.floor(Math.random()* emojis.length ) ;
    randomNumber1 = Math.floor(Math.random()* emojis.length ) ;
    stageEl.textContent = `${emojis[randomNumber]} vs ${emojis[randomNumber1]}`;

});

