let container = document.querySelector("#container");

container.innerHTML  = "<button> Buy </button>";

container.addEventListener('click', function(){
  container.innerHTML += "<p> Thank you for buying! </p>";
})