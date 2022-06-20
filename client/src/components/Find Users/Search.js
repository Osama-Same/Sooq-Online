import React from 'react'

const Search = (props) => {
  return (
    <section className="header-main border-bottom bg-dark">
      <div className="container-fluid">
        <div className="row p-2 pt-3 pb-3 d-flex align-items-center">
        <div className="col-md-2 d-none d-md-flex">

        </div>
          <div className="col-md-8">
            <div className="d-flex form-inputs">
              <input className="form-control" type="text" placeholder="Search any Name..." value={props.search} onChange={props.handleSearchChange} />
              <i className="bx bx-search"></i>
              <button className="btn btn-primary" type="submit" onClick={props.searchName}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Search