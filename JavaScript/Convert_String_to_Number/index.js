let num1_el = document.querySelector("#num1");
let num2_el = document.querySelector("#num2");
let button_el = document.querySelector("#button_el");
let result_el = document.querySelector("#result_el");


button_el.addEventListener('click', function (){
      
    let sum = Number(num1_el.value) +  Number(num2_el.value);
    result_el.textContent = `${num1_el.value} + ${num2_el.value} = ${sum}`;
    num1_el.value = '';
    num2_el.value ='';
});


