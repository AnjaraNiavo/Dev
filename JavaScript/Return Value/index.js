let player1Time = Math.floor(Math.random() * 100) + 1;
let player2Time = Math.floor(Math.random() * 100) + 1;

function getFastestRaceTime() {

  if (player1Time < player2Time) {

    return player2Time;

  } else if (player2Time < player1Time) {

    return player1Time;

  } else {

    return "It's a tie!";

  }
}

let fastestRace = getFastestRaceTime();

console.log(fastestRace);

function totalRaceTime (){

    return `The total race time of players1 : ${player1Time} and player2 : ${player2Time}  is equal ${player1Time + player2Time}`;
}

let totalTime = totalRaceTime();

console.log(totalTime);
