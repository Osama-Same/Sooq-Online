const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLogin(data) {
  
  data.Email = !isEmpty(data.Email) ? data.Email : "";
  data.Passowrd = !isEmpty(data.Passowrd) ? data.Passowrd : "";

  let error = {};
 

  // Email checks
  if (validator.isEmpty(data.Email)) {
    error.Email = "Email field is required";
  }
  if (!validator.isEmail(data.Email)) {
    error.Email = "Email is invalid";
  }
  

  // Password checks

  if (validator.isEmpty(data.Passowrd)) {
    error.Passowrd = "Passowrd field is required";
  }
  if (!validator.isLength(data.Passowrd, { min: 4, max: 30 })) {
    error.Passowrd = "Password must be at least 6 characters";
  }

  return { error, isValid: isEmpty(error) };
};