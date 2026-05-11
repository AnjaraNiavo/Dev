let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]


// Let's remove "Tuvalu" and "Monaco"

largeCountries.shift();
largeCountries.pop();

// Add 'China' and 'Pakistan'

largeCountries.unshift("China");
largeCountries.push("Pakistan")
console.log(largeCountries);