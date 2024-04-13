import css from "./Layout.module.css";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Loader from "./Loader/Loader";
import filmotekaIcon from "../helper/filmoteka.png";
import { Container } from "../styles/Container/Container";
const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;

const Layout = () => {
  const [selectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "en-US"
  );

  useEffect(() => {
    // Сохраняем выбранный язык в локальное хранилище при его изменении
    // localStorage.setItem("selectedLanguage", selectedLanguage);

    // Check if the theme is set in local storage, if not set the default light theme
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "theme-light");
    }
    // Apply the theme from local storage
    document.documentElement.className = localStorage.getItem("theme");
    // eslint-disable-next-line
  }, [selectedLanguage]);

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
  // function handleLanguageChange(e) {
  //   const selectedLanguage = e.target.value;
  //   setSelectedLanguage(selectedLanguage);
  //   localStorage.setItem("selectedLanguage", selectedLanguage);
  // }
  // function handleLanguageChange(e) {
  //   const selectedLanguage = e.target.value;
  //   setSelectedLanguage(selectedLanguage);
  //   localStorage.setItem("selectedLanguage", selectedLanguage);
  // }
  // const handleLanguageChange = (e) => {
  //   setSelectedLanguage(e.target.value);
  // };
  return (
    <Container>
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

          {/*  выпадающий список для выбора языка */}
          {/* <div>
            <select
              value={selectedLanguage}
              // onChange={(e) => setSelectedLanguage(e.target.value)}
              onChange={(e) => handleLanguageChange(e)}
              className={css.languageSelect}
            >
              <option value="en-US">English</option>
              <option value="de-DE">Deutsch</option>
              <option value="uk-UA">Ukrainisch</option>
              <option value="ru-RU">Russian</option>
            </select>
          </div> */}
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
    </Container>
  );
};
export default Layout;
