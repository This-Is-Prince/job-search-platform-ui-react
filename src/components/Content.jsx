import React, { useContext } from "react";
import AppContext from "../App/AppContext";
import JobsContainer from "./JobsContainer";
import SearchBar from "./SearchBar";

const Content = ({ classList }) => {
  const { appState } = useContext(AppContext);
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
