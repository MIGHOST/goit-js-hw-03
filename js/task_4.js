"use strict";

//Task-4
const countTotalSalary = employees => {
  // let keys = Object.values(employees);
  let total = 0;
  for (let key in employees) {
    total += employees[key];
  }
  return total;
}

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400