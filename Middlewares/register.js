const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validate(data) {
  data.Name = !isEmpty(data.Name) ? data.Name : "";
  data.Email = !isEmpty(data.Email) ? data.Email : "";
  data.Passowrd = !isEmpty(data.Passowrd) ? data.Passowrd : "";
  data.Phone = !isEmpty(data.Phone) ? data.Phone : "";
  data.Country = !isEmpty(data.Country) ? data.Country : "";
 // data.Image = !isEmpty(data.Image) ? data.Image : "";

  let error = {};
  if (validator.isEmpty(data.Name)) {
    error.Name = "First Name field is required";
  }

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
  if (validator.isEmpty(data.Phone)) {
    error.Phone = "Phone field is required";
  }
  if (validator.isEmpty(data.Country)) {
    error.Country = "Country field is required";
  }

  /* if (validator.isEmpty(data.Image)) {
    error.Image = "Image field is required";
  }  */
  return { error, isValid: isEmpty(error) };
};