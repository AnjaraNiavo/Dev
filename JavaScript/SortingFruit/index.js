let fruit = ["🍊","🍎","🍎","🍎","🍊","🍎","🍊","🍊"];

let appleEl = document.querySelector("#appleEl");
let orangeEl = document.querySelector("#orangeEl");

function  AddFruit(){
      for (let i = 0; i < fruit.length ; i++){

          if (fruit[i] === "🍊"){
              orangeEl.textContent += fruit[i];
          }else if  (fruit[i] === "🍎"){
            appleEl.textContent += fruit[i];
        }
      }
}

AddFruit ()