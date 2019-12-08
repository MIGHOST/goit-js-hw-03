"use strict";


//Task-2
const countProps = obj => Object.keys(obj).length;


console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500, country: "Urkaine", age: 20, city: "Kyiv"})); // 6
