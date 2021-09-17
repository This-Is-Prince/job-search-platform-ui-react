import React, { useContext } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import AppContext from "../App/AppContext";
import Employment from "./Job/Employment";
import JobAlert from "./Job/JobAlert";
import SalaryRange from "./Job/SalaryRange";
import SeniorityLevel from "./Job/SeniorityLevel";

const ChooseJob = ({ classes }) => {
  const { appState, dispatch } = useContext(AppContext);
  const closeJobModal = () => {
    dispatch({
      type: "OPEN_JOB_MODAL",
    });
  };
  return (
    <article className={`choose-job-container ${classes}`}>
      <header className="choose-job__header">
        <h3 className="choose-job__header-title">Choose Job</h3>
        <button
          className="btn choose-job__modal-close-btn"
          onClick={closeJobModal}
        >
          <FaRegTimesCircle />
        </button>
      </header>
      {/* job - alert  */}
      <div className="find-job-container">
        <JobAlert />
        <Employment />
        <SeniorityLevel />
        <SalaryRange />
      </div>
    </article>
  );
};

export default ChooseJob;
