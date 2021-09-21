import React from "react";
import JobsContainer from "./JobsContainer";
import SearchBar from "./SearchBar";

const Content = ({ classList }) => {
  return (
    <>
      <main className={`main ${classList}`}>
        <SearchBar />
        <JobsContainer />
      </main>
    </>
  );
};

export default Content;
