import React, { useContext } from "react";
import AppContext from "../App/AppContext";
import Jobs from "./Job/Jobs";
import JobsContainer from "./JobsContainer";
import JobModal from "./Model/JobModal";
import SearchBar from "./SearchBar";

const Content = ({ classList }) => {
  const { appState } = useContext(AppContext);
  return (
    <>
      <main className={`main ${classList}`}>
        {appState.isJobModalOpen ? (
          <>
            <SearchBar />
            <JobsContainer />
          </>
        ) : (
          <>
            <SearchBar />
            <JobsContainer />
            {/* <SearchBar />
            <Jobs/>
            <JobModal/> */}
          </>
        )}
      </main>
    </>
  );
};

export default Content;
