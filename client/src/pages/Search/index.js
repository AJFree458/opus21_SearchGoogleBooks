import React from "react";
import InputCard from "../../components/SearchCard";
import ResultsField from "../../components/ResultsField"

function Search() {
  return(
    <div className="container-xl mb-3">
      <InputCard />

      <ResultsField />

    </div>
  )
};

export default Search;
