const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateLoginInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.Email = !isEmpty(data.Email) ? data.Email : "";
  data.Passowrd = !isEmpty(data.Passowrd) ? data.Passowrd : "";
 
// Email checks
  if (Validator.isEmpty(data.Email)) {
    errors.Email = "Email field is required";
  } else if (!Validator.isEmail(data.Email)) {
    errors.Email = "Email is invalid";
  }
// Password checks
  if (Validator.isEmpty(data.Passowrd)) {
    errors.Passowrd = "Password field is required";
  }

if (!Validator.isLength(data.Passowrd, { min: 4, max: 30 })) {
    errors.Passowrd = "Password must be at least 6 characters";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};