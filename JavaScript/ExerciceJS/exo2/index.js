/*

// program to get the extension of a file name

let fileName = 'index.mp4';
let fileArray = [];


for (let i = 0; i < fileName.length ; i++){
    console.log(fileName[i]);
    fileArray.push(fileName[i]);
}

console.log(fileArray);

for ( let j = 0 ; j < fileArray.length; j++){
    if (fileArray[j] === '.'){

      const extensionArray = fileArray.slice(j);
      console.log(extensionArray);

      // let's convert the extensionArray into string using .join()

      const str = extensionArray.join('');
      console.log (str);

    }
}

*/


const getExtession = (str) => str.slice(str.lastIndexOf('.'));

console.log(getExtession('hello.css'));
console.log(getExtession('hello.py'));