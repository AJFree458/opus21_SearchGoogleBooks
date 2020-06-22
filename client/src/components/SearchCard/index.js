import React from "react";

function InputCard() {
  return (
    <div className="card">
      <div className="card-body">
        <h2>Book Search</h2>
        <p>Book</p>
        <input className="form-control form-control-lg" type="text" placeholder="Book Search" />
        <button type="button" className="btn btn-info btn-sm mr-auto mt-3">Search</button>
      </div>
    </div>
  )
}

export default InputCard;