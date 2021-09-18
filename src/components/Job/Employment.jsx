import React, { useContext } from "react";
import AppContext from "../../App/AppContext";

const Employment = () => {
  const { appState, dispatch } = useContext(AppContext);
  const handleOnChange = (id) => {
    dispatch({
      type: "EMPLOYMENT_CHECKED",
      payload: id,
    });
  };
  return (
    <section className="job-select-container">
      <h4 className="job-select-container__heading">Type of Employment</h4>
      <ul className="job-select-list">
        {appState.employmentType.map((employment) => {
          const { id, name, isChecked, noOfJob } = employment;
          return (
            <li
              key={id}
              className={`job-select ${isChecked ? "job-select__active" : ""}`}
              onClick={() => handleOnChange(id)}
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

export default Employment;
