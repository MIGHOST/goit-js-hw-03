"use strict";

// //Task-1

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,

};
user.mood = "happy";
user.hobby = "javascript";
user.premium = "false";

const keys = Object.keys(user);

for (let key of keys) {
  console.log(`key: ${key}, value: ${user[key]}`)
}

