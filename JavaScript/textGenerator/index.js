let desc = "";
let arr = [];

function generateSentence(desc, arr){
  let arrLog =[];

    for (let i= 0; i<arr.length; i++){

      /*if (arr.length === 1){
        console.log(`The ${arr.length} ${desc} is ${arr[i]}`);
      }

      else {
        console.log(`The ${arr.length} ${desc} are ${arr[i]}`);
      }
        */
       arrLog.push(arr[i]);
    }

    console.log(`The ${arr.length} ${desc} are ${arrLog}`);

};

generateSentence('better',["banana","orange"]);