let bt_elt = document.querySelector('#bt_el');
let data = [
    {
      player : "Niavo",
      score : 52
    },
    {
      player :"Mark",
      score: 41
    }
];

bt_elt.addEventListener('click',function(){
    console.log(`Jane's score ${data[0].score}`);
})