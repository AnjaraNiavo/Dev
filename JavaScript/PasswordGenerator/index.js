const letters = [
  "a","b","c","d","e","f","g","h","i","j",
  "k","l","m","n","o","p","q","r","s","t",
  "u","v","w","x","y","z"
];

let passwordbtn = document.querySelector("#passwordbtn");
let passwordEl1 = document.querySelector("#passwordEl1")
let passwordEl2 = document.querySelector("#passwordEl2");

passwordbtn.addEventListener( 'click',function(){


      for (let i = 0 ; i< letters.length; i++){


        let randomNumber1 = Math.floor(Math.random() * letters.length);

        let randomNumber2 = Math.floor(Math.random() * letters.length);

        if ( i < 8){
          passwordEl1.textContent += letters[randomNumber1];
          passwordEl2.textContent += letters[randomNumber2];

          if (passwordEl1.textContent.length > 8 && passwordEl2.textContent.length > 8 ){

            passwordEl1.textContent = ' ';
            passwordEl2.textContent = ' ';

          }

        }

      }
});