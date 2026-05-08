let student = {name: "Sharon", age: 18};
let details = {city: "Hyderabad", course: "B.tech"};
let fullDetails = {...student, ...details};
console.log(fullDetails);