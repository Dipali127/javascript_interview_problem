// question:- write a program to generate a 6 - digit random OTP.
// About Math.random:
// Math.random() generates a floating-point number between 0 (inclusive) and 1 (exclusive). 
// This means the smallest number it can produce is 0 and the largest number it can produce is just less than 1.

console.log(generateOTP1());
// The below code gives us a random floating-point number between 0 (inclusive) and 1 (exclusive).
// Math is a class, and random is a method of the Math class.
function generateOTP1() {
  return Math.random();
}

console.log(generateOTP2());
// The below code gives us a random integer between 0 and 9 (inclusive).
// To get a random integer between 0 and 10 (inclusive), you would need to multiply by 11 and then use Math.floor().
function generateOTP2() {
  return Math.floor(Math.random() * 10);
}

console.log(generateOTP3());
// The below code gives us a random integer between 0 and 99 (inclusive).
function generateOTP3() {
  return Math.floor(Math.random() * 100);
}

console.log(generateOTP4());
// The below code generates a random integer between 1 and 10 (inclusive) because adding 1 shifts the range from 0-9 to 1-10.
function generateOTP4() {
  return Math.floor(Math.random() * 10) + 1;
}

console.log(generateOTPof6Digit());
// The below code generates a random integer between 0 and 999999 (inclusive), which is effectively a 6-digit number with leading zeros if necessary.
// Note: This will include 0 as a possible value. To ensure it's always a 6-digit number, format it accordingly.
function generateOTPof6Digit() {
  return Math.floor(Math.random() * 1000000);
}

console.log(generateOTP5(1,10));
// The below code generates a random integer between min (inclusive) and max-1 (inclusive).
// For example, generateOTP5(1,10) will give you numbers between 1 and 9 (inclusive).
function generateOTP5(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(generateOTP6(1,10));
// The below code generates a random integer between min (inclusive) and max (inclusive).
// For example, generateOTP6(1,10) will give you numbers between 1 and 10 (inclusive).
function generateOTP6(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
