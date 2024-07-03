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
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "en-US"
  );

  useEffect(() => {
    // Сохраняем выбранный язык в локальное хранилище при его изменении
    localStorage.setItem("selectedLanguage", selectedLanguage);

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

  return (
    <Container>
      <div className={css.container}>
        <header className={css.header}>
          <StyledLink to="/">
            <img src={filmotekaIcon} alt="Filmoteka" className={css.icon} />
          </StyledLink>
          <ul className={css.listLayout}>
            <li>
              <StyledLink to="/" state={{ selectedLanguage }}>
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/movies" state={{ selectedLanguage }}>
                Movies
              </StyledLink>
            </li>
          </ul>

          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className={css.selectedLanguage}
          >
            <option value="en-US">En</option>
            <option value="de-DE">De</option>
            <option value="uk-UA">Uk</option>
            <option value="ru-RU">Ru</option>
            <option value="ar-SA">العربية</option>
          </select>

          <label id="switch" className={css.switch}>
            <input type="checkbox" onChange={toggleTheme} id="slider" />
            <span className={css.slider + " " + css.round}></span>
          </label>
        </header>
        <main>
          {/* <Suspense fallback={<div>Laoding...</div>}> */}
          <Suspense fallback={<Loader />}>
            <Outlet context={{ selectedLanguage }} />
          </Suspense>
        </main>
      </div>
    </Container>
  );
};
export default Layout;
