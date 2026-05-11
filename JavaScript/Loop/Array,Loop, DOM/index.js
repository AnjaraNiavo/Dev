let array = ['my','name','is','Niavo'
]

let stringGretings = [];

let gretingsEl = document.querySelector("#gretingsEl")

for (let i = 0 ; i < array.length; i ++){


  gretingsEl.textContent += array[i] + " ";
      
}
