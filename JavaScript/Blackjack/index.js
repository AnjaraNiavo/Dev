

let cardArray = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";


//let msgElm = document.getElementById("msgElm");
//let sumElmt = document.getElementById("sumElmt");

let msgEl = document.querySelector("#msgEl");
let sumEl = document.querySelector("#sumEl");
let cardsEl = document.querySelector("#cardsEl");
let objectEl = document.querySelector("#playerEl");

const player = {
      playerName :'Niavo',
      chips: 23,
      SayHello: function (){
            return `Hello my name is ${this.playerName} and my chips is equal to ${this.chips}`;
      }
}

objectEl.textContent = player.SayHello();

function startGame(){

      isAlive = true;

      let firstCard = getRandomCard();
      let secondCard = getRandomCard();
      cardArray = [firstCard, secondCard];
      sum = firstCard + secondCard;

      renderGame();
    }

function renderGame(){

        cardsEl.textContent = `Cards: `;
        if ( sum <= 20){
            message = "Do you want to draw a new card?";
        } else if (sum === 21){
            message = "wohoo! You've got Blackjack!";

            hasBlackJack = true;
        } else {
          message = "You're out of the game!";

          isAlive = false;

        }
        
        msgEl.textContent= message;
        sumEl.textContent = `Sum: ${sum}`;

        for (let i = 0; i < cardArray.length; i++){
              cardsEl.textContent +=  cardArray[i] + " ";
        }
        
  }

  function newCard(){
        
        let newcard = getRandomCard ();

        sum = sum + newcard;

        cardArray.push(newcard);

        renderGame();

  }


// This return always the number 5

  function getRandomCard() {
      
      randomNumber = Math.floor(Math.random()*13) + 1;
      console.log(randomNumber);

      if (randomNumber === 1){
            
            return 11;

      } else if ( randomNumber === 11 && randomNumber === 12 && randomNumber === 13){
      
            return 10;

      } else{
            return randomNumber;
      }
    
  }

  