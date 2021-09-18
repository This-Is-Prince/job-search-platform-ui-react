import React, { useContext } from "react";
import AppContext from "../../App/AppContext";
import Job from "./Job";
import NotFoundModal from "../Model/NotFoundModal";

const Jobs = () => {
  const { appState } = useContext(AppContext);
  return (
    <>
      {appState.jobs.length > 0 ? (
        <section className="jobs">
          {appState.jobs.map((job) => {
            const { id } = job;
            return <Job key={id} {...job} />;
          })}
        </section>
      ) : (
        <NotFoundModal />
      )}
    </>
  );
};

export default Jobs;
