import React, { useContext } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { FaEllipsisV } from "react-icons/fa";
// import { FiMessageSquare } from "react-icons/fi";
import Profile from "../images/profile.png";
import AppContext from "../App/AppContext";

const Header = ({ classList }) => {
  const { appState, dispatch } = useContext(AppContext);
  const openJobModal = () => {
    dispatch({
      type: "OPEN_JOB_SEARCH_MODAL",
    });
  };

  const changeTheme = () => {
    dispatch({
      type: "SET_IS_DAY",
    });
    if (appState.isDay) {
      document.body.classList.add("night");
    } else {
      document.body.classList.remove("night");
    }
  };
  const changeLinks = (id) => {
    dispatch({
      type: "CHANGE_LINKS",
      payload: id,
    });
  };

  return (
    <header className={`header ${classList}`}>
      <h2 className="header__title">J.S</h2>
      <ul className="header__links-list">
        {appState.links.map((link) => {
          const { id, active, name } = link;
          return (
            <li className="link-item" key={id}>
              <a
                onClick={() => changeLinks(id)}
                href="#"
                className={`link ${active ? "active-link" : ""}`}
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>

      <article className="header__btns">
        <button className="btn header__btn" onClick={changeTheme}>
          {appState.isDay ? <BiMoon /> : <BiSun />}
        </button>
        <button
          className="btn header__btn header__menu-btn"
          onClick={openJobModal}
        >
          <FaEllipsisV />
        </button>
        {/* <button className="btn header__btn">
          <FiMessageSquare />
        </button> */}
        <div className="hero__separate"></div>
        <div className="hero-container">
          <img src={Profile} alt="profile image" className="hero-img" />
          <h4 className="hero-title">Prince</h4>
        </div>
      </article>
    </header>
  );
};

export default Header;
