import React, { useContext, useEffect } from "react";
import { BiShareAlt } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import AppContext from "../../App/AppContext";
import JobBG from "../../images/job-bg.jpg";

const JobModal = () => {
  const { appState, dispatch } = useContext(AppContext);
  useEffect(() => {
    dispatch({
      type: "OPEN_JOB_MODAL",
    });
    return () => {
      dispatch({
        type: "OPEN_JOB_MODAL",
      });
    };
  }, []);
  const { id } = useParams();
  const {
    Icon,
    Class,
    title,
    location,
    posted,
    noOfApplication,
    experience,
    seniorityLevel,
    employmentType,
    salary,
    overview,
    description,
  } = appState.jobs[id - 1];
  return (
    <section className={`job-modal `}>
      <header className="job-modal__header">
        <article>
          <img
            src={JobBG}
            className="job-modal__img"
            alt="job modal background img"
          />
          <div className="job-modal__icon-cont">
            <span className={`job-icon icon ${Class}`}>
              <Icon />
            </span>
          </div>
        </article>
        <article className="job-modal__headings">
          <h3 className="job-modal__heading">{title}</h3>
          <div className="heading-icon-cont">
            <span className="icon heading-icon">
              <FaRegHeart />
            </span>
            <span className="icon heading-icon">
              <BiShareAlt />
            </span>
          </div>
        </article>
      </header>
      <article className="job-modal__info">
        <p className="job-modal__info-p">
          <span>Patreon </span> . {location}
        </p>
        <p className="job-modal__info-p">
          posted {posted} days ago . <span>{noOfApplication} application</span>
        </p>
      </article>
      <article className="job-modal__requirements">
        <div className="job-modal__requirement">
          <p>Experience</p>
          <p>minimum {experience} year</p>
        </div>
        <div className="job-modal__requirement">
          <p>work level</p>
          <p>{seniorityLevel}</p>
        </div>
        <div className="job-modal__requirement">
          <p>employee type</p>
          <p>{employmentType} </p>
        </div>
        <div className="job-modal__requirement">
          <p>Offer salary</p>
          <p>${salary} / month</p>
        </div>
      </article>
      <article className="job-modal__overview">
        <h3>Overview</h3>
        <p>{overview}</p>
      </article>
      <article className="job-modal__description">
        <h3>Job Description</h3>
        <ul>
          {description.map((desc, index) => {
            return (
              <li key={index} className="job-modal__item">
                <span> ➜ </span>
                <span>{desc}</span>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};

export default JobModal;
