
const date = ( fullDate = new Date()) => {

  const days = fullDate.getDate();
  const months = fullDate.getMonth();
  const years = fullDate.getFullYear();
  
  return `${days} / ${months} / ${years}`;
}

console.log(date());