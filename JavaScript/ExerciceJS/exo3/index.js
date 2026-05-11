/* Code Js to replace every characater in giving string with the character it in the alphabet

  niavo -> mjbwp

*/



function stringConvert (string) {
      const alphabet = [
        'a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z'
      ];
      
      let strings = string ;
      let stringConvert = []
      
      for ( let i = 0; i < strings.length; i++){
      
          let stringDetect = strings[i];
          
          // Let's find the index of string [i] in the alphabet array using indexOf ()
      
      
          let index = alphabet.indexOf(stringDetect);
      
          stringConvert.push(alphabet[index + 1]);
          
      
      }
      
      console.log(`Before: ${string}`);
      
      console.log(`After: ${stringConvert.join('')}`);

}

stringConvert('r');
    