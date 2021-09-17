import React, { useContext } from "react";
import AppContext from "../../App/AppContext";
import Job from "./Job";

const Jobs = () => {
  const { appState, dispatch } = useContext(AppContext);
  return (
    <section className="jobs">
      {appState.jobs.map((job) => {
        const { id } = job;
        return <Job key={id} {...job} />;
      })}
    </section>
  );
};

export default Jobs;
