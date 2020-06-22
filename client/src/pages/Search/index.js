import React from "react";

function Search() {
  return(
    <div className="container-xl mb-3">
      <div className="card">
        <div className="card-body">
          <h2>Book Search</h2>
          <p>Book</p>
          <input className="form-control form-control-lg" type="text" placeholder="Book Search" />
          <button type="button" className="btn btn-info btn-sm mr-auto mt-3">Search</button>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-header">
          <h3>Results</h3>
        </div>
        <div className="card-body">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-10">
                  <h4>Title</h4>
                  <p>Subtitle</p>
                  <p>Author</p>
                </div>
                <div className="col-2">
                  <button type="button" className="btn btn-info btn-sm m-2">View</button>
                  <button type="button" className="btn btn-info btn-sm m-2">Save</button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="..." className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-10">
                  <h4>Title</h4>
                  <p>Subtitle</p>
                  <p>Author</p>
                </div>
                <div className="col-2">
                  <button type="button" className="btn btn-info btn-sm m-2">View</button>
                  <button type="button" className="btn btn-info btn-sm m-2">Save</button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="..." className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-10">
                  <h4>Title</h4>
                  <p>Subtitle</p>
                  <p>Author</p>
                </div>
                <div className="col-2">
                  <button type="button" className="btn btn-info btn-sm m-2">View</button>
                  <button type="button" className="btn btn-info btn-sm m-2">Save</button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="..." className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-10">
                  <h4>Title</h4>
                  <p>Subtitle</p>
                  <p>Author</p>
                </div>
                <div className="col-2">
                  <button type="button" className="btn btn-info btn-sm m-2">View</button>
                  <button type="button" className="btn btn-info btn-sm m-2">Save</button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="..." className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
};

export default Search;
