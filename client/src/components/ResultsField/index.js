import React from "react";
import ResultsCard from "../ResultsCard"

function ResultsField() {
  return (
    <div className="card mt-3">
      <div className="card-header">
        <h3>Results</h3>
      </div>
      <div className="card-body">
        <ResultsCard />
      </div>
    </div>
  )
}

export default ResultsField;
