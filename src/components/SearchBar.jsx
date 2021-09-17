import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaLocationArrow, FaBriefcase, FaDollarSign } from "react-icons/fa";

const SearchBar = () => {
  return (
    <section className={`job-search-container`}>
      <article className="search-bar-container">
        <span className="search-icon icon">
          <FaSearch />
        </span>
        <input type="text" className="search-bar" placeholder="search" />
      </article>
      <article className="search-bar-container location-container">
        <span className="search-icon icon">
          <FaLocationArrow />
        </span>
        <input
          type="text"
          className="search-bar"
          placeholder="jalandhar , Punjab"
        />
      </article>
      <article className="search-bar-container job-container">
        <span className="search-icon icon">
          <FaBriefcase />
        </span>
        <input type="text" className="search-bar" placeholder="job type" />
      </article>
      <article className="search-bar-container salary-container">
        <span className="search-icon icon">
          <FaDollarSign />
        </span>
        <input type="text" className="search-bar" placeholder="salary range" />
      </article>
      <article className="find-btn-container">
        <button className="btn find-btn">find job</button>
      </article>
    </section>
  );
};

export default SearchBar;
