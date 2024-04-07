import css from "./Layout.module.css";
import styled from "styled-components";
import React, { useEffect } from "react";
import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Loader from "./Loader/Loader";
import filmotekaIcon from "../helper/filmoteka.png";
const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;

const Layout = () => {
  useEffect(() => {
    // Check if the theme is set in local storage, if not set the default light theme
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "theme-light");
    }
    // Apply the theme from local storage
    document.documentElement.className = localStorage.getItem("theme");
  }, []);

  function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
  }

  // function to toggle between light and dark theme
  function toggleTheme() {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
    } else {
      setTheme("theme-dark");
    }
  }

  return (
    <div className={css.container}>
      <header className={css.header}>
        <StyledLink to="/">
          <img src={filmotekaIcon} alt="Filmoteka" className={css.icon} />
        </StyledLink>
        <ul className={css.listLayout}>
          <li>
            <StyledLink
              // activeClassName={css.activeClassName}
              // exact
              // className={css.styledLink}
              // activeClassName={css.active}
              to="/"
            >
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink
              // activeClassName={css.activeClassName}
              // className={css.styledLink}
              // activeClassName={css.active}
              to="/movies"
            >
              Movies
            </StyledLink>
          </li>
        </ul>
        <label id="switch" className={css.switch}>
          <input type="checkbox" onChange={toggleTheme} id="slider" />
          <span className={css.slider + " " + css.round}></span>
        </label>
      </header>
      <main>
        {/* <Suspense fallback={<div>Laoding...</div>}> */}
        <Suspense fallback={<div>{Loader()}</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default Layout;
