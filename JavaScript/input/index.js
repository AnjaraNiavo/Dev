
let save_el = document.querySelector('#save_el');
let delete_el = document.querySelector('#delete_el');
let tab_el = document.querySelector('#tab_el');

const input_el = document.querySelector('#input_el');
const ul_el = document.querySelector('#ul_el');


let myLeads = [];
let leadsLocalStorage = [];
let leadsFrontLocalStorage = JSON.parse(localStorage.getItem('myLeads'));



if (leadsFrontLocalStorage){
    myLeads = leadsFrontLocalStorage;
    renderLeads(myLeads);
}


save_el.addEventListener('click',  function (){
    
    let input_value = input_el.value;
    myLeads.push(input_value);
    input_el.value = '';

    myLeads = JSON.stringify(myLeads);
    localStorage.setItem('myLeads',myLeads);
  
    myLeads = JSON.parse(myLeads);
    renderLeads(myLeads);

})

delete_el.addEventListener('dblclick', function(){
    localStorage.clear();
    myLeads = [];
    ul_el.innerHTML = '';
    
})

tab_el.addEventListener('click', function(){
    // Get the input url on the chrome
    chrome.tabs.query({active: true, currentWindow : true}, function (tabs){
        console.log(tabs[0].url);

        myLeads.push(tabs[0].url);
        localStorage.setItem('myLeads', JSON.stringify(myLeads));
        renderLeads(myLeads);

    })
})

function renderLeads(leads){
    let listItem = "";
    for (let i = 0;i< leads.length; i++){
        listItem += `<li> 

            <a target = '_blank' href = 'https://www.google.com/'>${leads[i]}</a>

        </li>`

        ul_el.innerHTML = listItem;
    }
    
}


