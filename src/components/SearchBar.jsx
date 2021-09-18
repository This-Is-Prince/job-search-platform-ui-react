import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { FaLocationArrow, FaBriefcase, FaDollarSign } from "react-icons/fa";
import { jobs } from "../data";
import AppContext from "../App/AppContext";
import DataList from "./DataList";

const SearchBar = () => {
  const { appState, dispatch } = useContext(AppContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      amount: currSalary,
      jobTypes: currJobTypes,
      location: currLocation,
      employmentType: currEmploymentType,
    } = appState.searchQueries;
    // if (
    //   currSalary === "" &&
    //   currJobTypes === "" &&
    //   currLocation === "" &&
    //   currEmploymentType === ""
    // ) {
    //   return;
    // }
    const searchSalary = Number(currSalary);
    const jobTypesChar = currJobTypes.split(" ");
    const locationChar = currLocation.split(" ");
    const employmentTypeChar = currEmploymentType.split(" ");

    const newJobs = jobs.filter((job) => {
      let { title, location, employmentType, salary } = job;
      title = title.toLowerCase();
      location = location.toLowerCase();
      employmentType = employmentType
        .toLowerCase()
        .replace("time", "")
        .replace("jobs", "");

      let isJobTypes = false;
      let isLocation = false;
      let isSalary = false;
      let isEmploymentType = false;
      if (currJobTypes !== "") {
        isJobTypes = jobTypesChar.some((obj) => {
          return title.includes(obj);
        });
      }
      if (currLocation !== "") {
        isLocation = locationChar.some((obj) => {
          return location.includes(obj);
        });
      }
      if (currSalary !== "") {
        isSalary = salary < searchSalary;
      }

      if (currEmploymentType !== "") {
        isEmploymentType = employmentTypeChar.some((obj) => {
          return employmentType.includes(obj);
        });
      }
      if (isJobTypes || isSalary || isLocation || isEmploymentType) {
        return true;
      }
      return false;
    });
    dispatch({ type: "ADD_JOBS", payload: newJobs });
  };

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newSearchQueries = {
      ...appState.searchQueries,
      [name]: value,
    };
    dispatch({
      type: "ADD_SEARCH_QUERIES",
      payload: newSearchQueries,
    });
  };
  return (
    <form onSubmit={handleSubmit} className="job-search-container">
      <article className="search-bar-container">
        <span className="search-icon icon">
          <FaSearch />
        </span>
        <input
          type="search"
          className="search-bar"
          list="job-types"
          name="jobTypes"
          value={appState.searchQueries.jobTypes}
          onChange={handleOnChange}
          placeholder="UI UX Designer etc. "
        />
        <DataList uniqueID="job-types" list={appState.jobTypes} />
      </article>
      <article className="search-bar-container location-container">
        <span className="search-icon icon">
          <FaLocationArrow />
        </span>
        <input
          type="text"
          className="search-bar"
          name="location"
          value={appState.searchQueries.location}
          onChange={handleOnChange}
          placeholder="san diego , california"
        />
      </article>
      <article className="search-bar-container job-container">
        <span className="search-icon icon">
          <FaBriefcase />
        </span>
        <input
          type="search"
          className="search-bar"
          list="employment-types"
          name="employmentType"
          value={appState.searchQueries.employmentType}
          onChange={handleOnChange}
          placeholder="Full time , Part time etc."
        />
        <DataList uniqueID="employment-types" list={appState.employmentTypes} />
      </article>
      <article className="search-bar-container salary-container">
        <span className="search-icon icon">
          <FaDollarSign />
        </span>
        <input
          type="number"
          className="search-bar"
          name="amount"
          value={appState.searchQueries.amount}
          onChange={handleOnChange}
          placeholder="$ 1280"
        />
      </article>
      <article className="find-btn-container">
        <button type="submit" className="btn find-btn">
          find job
        </button>
      </article>
    </form>
  );
};

export default SearchBar;
