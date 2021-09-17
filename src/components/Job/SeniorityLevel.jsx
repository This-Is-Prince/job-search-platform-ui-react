import React, { useContext } from "react";
import AppContext from "../../App/AppContext";

const SeniorityLevel = () => {
  const { appState, dispatch } = useContext(AppContext);
  const handleOnChange = (id) => {
    dispatch({
      type: "SENIORITY_LEVEL_CHECKED",
      payload: id,
    });
  };
  return (
    <section className="job-select-container">
      <h4 className="job-select-container__heading">Seniority Level</h4>
      <ul className="job-select-list">
        {appState.seniorityLevel.map((seniority) => {
          const { id, name, isChecked, noOfJob } = seniority;
          return (
            <li
              key={id}
              className={`job-select ${isChecked ? "job-select__active" : ""}`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleOnChange(id)}
                className="job-select__input"
              />
              <p className="job-select__title">{name}</p>
              <span className="job-select__noOfJob">{noOfJob}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SeniorityLevel;
