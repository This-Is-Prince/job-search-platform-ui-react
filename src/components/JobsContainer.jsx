import React, { useContext } from "react";
import AppContext from "../App/AppContext";
import ChooseJob from "./ChooseJob";
import Jobs from "./Job/Jobs";
import JobModal from "./Model/JobModal";
const JobsContainer = () => {
  const { appState } = useContext(AppContext);
  return (
    <>
      <ChooseJob classes="modalStatic" />
      <Jobs />
    </>
  );
};

export default JobsContainer;
