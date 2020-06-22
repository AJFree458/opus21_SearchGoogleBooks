import React from "react";
import SavedCard from "../../components/SavedCard";

function Saved() {
  return(
    <div className="container-xl mb-3">
      <div className="card mt-3">
        <div className="card-header">
          <h3>Saved Books</h3>
        </div>
        <div className="card-body">
          <SavedCard />
        </div>
      </div>
    </div>
  )
};

export default Saved;
