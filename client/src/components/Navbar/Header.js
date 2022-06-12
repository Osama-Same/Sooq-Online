import React, { useState, useEffect } from "react";

const Header = (props) => {
  return (
    <section class="header-main border-bottom bg-dark">
      <div class="container-fluid">
        <div class="row p-2 pt-3 pb-3 d-flex align-items-center">
          <div class="col-md-2 d-none d-md-flex">
            <select class="form-select" name="Category_Post"  onClick={props.handleCategoryChange} style={{height:"38px"}}>
            <option>Select Category</option>
              <option >Cars</option>
              <option >Tablet</option>
              <option >Mobile</option>
              <option >Computer</option>
              <option >Laptop</option>
              <option >Playstation</option>
              <option >Baby Supplies</option>
              <option >Clothes</option>
            </select>
          </div>
          <div class="col-md-8">
            <div class="d-flex form-inputs">
              <input class="form-control" type="text" placeholder="Search any product..." value={props.search} onChange={props.handleSearchChange} />
              <i class="bx bx-search"></i>
              <button class="btn btn-primary" type="submit" onClick={props.findSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
