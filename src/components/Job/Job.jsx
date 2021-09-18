import React from "react";
import { FaEllipsisH } from "react-icons/fa";

const Job = ({
  Icon,
  title,
  seniorityLevel,
  experience,
  employmentType,
  info,
  Class,
}) => {
  const employment = employmentType.replace("jobs", "");
  return (
    <article className="job job-animate">
      <header className="job-header">
        <span className={`job-icon icon ${Class}`}>
          <Icon />
        </span>
        <button className="btn job-menu-btn">
          <FaEllipsisH />
        </button>
      </header>
      <p className="job-heading">{title}</p>
      <p className="job-info">{info}</p>
      <div className="job-status-container">
        <span className="job-status">{employment}</span>
        <span className="job-status">min. {experience} year</span>
        <span className="job-status">{seniorityLevel}</span>
      </div>
      <div className="job-btn-container">
        <button className="job-btn btn">apply now</button>
        <button className="job-btn btn">messages</button>
      </div>
    </article>
  );
};

export default Job;
