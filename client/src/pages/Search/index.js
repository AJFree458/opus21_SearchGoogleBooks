import React from "react";
import InputCard from "../../components/SearchCard";
import ResultsCard from "../../components/ResultsCard"

function Search() {
  return(
    <div className="container-xl mb-3">
      <InputCard />

      <div className="card mt-3">
        <div className="card-header">
          <h3>Results</h3>
        </div>
        <div className="card-body">
          <ResultsCard />
        </div>
      </div>

    </div>
  )
};

export default Search;
