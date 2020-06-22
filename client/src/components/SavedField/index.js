import React from "react";
import SavedCard from "../SavedCard";

function SavedField() {
  return (
    <div className="card mt-3">
      <div className="card-header">
        <h3>Saved Books</h3>
      </div>
      <div className="card-body">
        <SavedCard />
      </div>
    </div>
  )
};

export default SavedField;
