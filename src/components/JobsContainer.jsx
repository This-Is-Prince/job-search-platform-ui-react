import React from "react";
import ChooseJob from "./ChooseJob";
import Jobs from "./Job/Jobs";
import JobModal from "./Model/JobModal";
const JobsContainer = () => {
  return (
    <>
      <ChooseJob classes="modalStatic" />
      <Jobs />
    </>
  );
};

export default JobsContainer;
