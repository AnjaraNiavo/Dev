
function calling(){

        console.log(`The calling function ...`);
        console.log(`this is the result of the addition function${add(2,4)}`);
        console.log(`This is the result of substraction function: ${substration (3,6)}`);
}
 
function add (a,b){
    let addition = a + b;
    return addition;
}

function substration (a,b){
    let substraction = a- b;
    return substraction;
}

calling();