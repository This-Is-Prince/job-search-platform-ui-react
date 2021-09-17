import React, { useContext } from "react";
import AppContext from "../../App/AppContext";

const SalaryRange = () => {
  const { appState, dispatch } = useContext(AppContext);
  const handleOnChange = (id) => {
    dispatch({
      type: "SALARY_RANGE_CHECKED",
      payload: id,
    });
  };
  return (
    <section className="job-select-container">
      <h4 className="job-select-container__heading">Salary Range</h4>
      <ul className="job-select-list">
        {appState.salaryRange.map((salary) => {
          const { id, min, max, isChecked, noOfJob } = salary;
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
              <p className="job-select__title">{`
              $ ${min} - $${max}
              `}</p>
              <span className="job-select__noOfJob">{noOfJob}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SalaryRange;
