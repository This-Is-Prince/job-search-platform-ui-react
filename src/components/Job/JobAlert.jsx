import React from "react";

const JobAlert = () => {
  return (
    <section className="job-alert">
      <p className="job-alert-title">create job alert</p>
      <p className="job-alert-info">
        Create a job alert now and never miss a job
      </p>
      <input
        type="text"
        className="job-alert-input"
        placeholder="Enter job keyword"
      />
      <button className="btn job-alert-btn">create job alerts</button>
    </section>
  );
};

export default JobAlert;
