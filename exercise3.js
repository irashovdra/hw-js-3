const SAVED_PASSWORD = 123;
console.log(SAVED_PASSWORD);

let password = prompt("Enter password");
password = Number(password);
console.log(password);

let isMatch = SAVED_PASSWORD === password;
console.log(isMatch);
