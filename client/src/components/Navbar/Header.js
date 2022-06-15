import React from "react";

const Header = (props) => {
  return (
    <section className="header-main border-bottom bg-dark">
      <div className="container-fluid">
        <div className="row p-2 pt-3 pb-3 d-flex align-items-center">
          <div className="col-md-2 d-none d-md-flex">
            <select className="form-select" name="Category_Post"  onClick={props.handleCategoryChange} style={{height:"38px"}}>
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
          <div className="col-md-8">
            <div className="d-flex form-inputs">
              <input className="form-control" type="text" placeholder="Search any product..." value={props.search} onChange={props.handleSearchChange} />
              <i className="bx bx-search"></i>
              <button className="btn btn-primary" type="submit" onClick={props.findSearch}>
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
