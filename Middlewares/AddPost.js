const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validate(data) {
  data.Name_Post = !isEmpty(data.Name_Post) ? data.Name_Post : "";
  data.Category_Post = !isEmpty(data.Category_Post) ? data.Category_Post : "";
  data.Country_Post = !isEmpty(data.Country_Post) ? data.Country_Post : "";
  data.Price_Post = !isEmpty(data.Price_Post) ? data.Price_Post : "";
  data.Date_Post = !isEmpty(data.Date_Post) ? data.Date_Post : "";


  let error = {};
  if (validator.isEmpty(data.Name_Post)) {
    error.Name_Post = "Name field is required";
  }


  if (validator.isEmpty(data.Category_Post)) {
    error.Category_Post = "Categor field is required";
  }
 
  if (validator.isEmpty(data.Country_Post)) {
    error.Country_Post = "Country field is required";
  }
  if (validator.isEmpty(data.Price_Post)) {
    error.Price_Post = "Price field is required";
  }
  if (validator.isEmpty(data.Date_Post)) {
    error.Date_Post = "Date field is required";
  }
 

  return { error, isValid: isEmpty(error) };
};