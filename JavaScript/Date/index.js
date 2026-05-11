let dayOfMonth = 6;
let weekday = "saturday";

let day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

date = new Date ();


console.log(date.getDate());
console.log(day[date.getDay()]);

if ( date.getDate() === 6 && day[date.getDay()] === 'Saturday'){
      console.log(`🤯`);
}else {
      console.log(`😭`);
}


