// const OTP = require("otp")
// var otp = new OTP();
// console.log(otp.totp())

const otpGenerator = require('otp-generator')

let x = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets:false });
console.log(x)