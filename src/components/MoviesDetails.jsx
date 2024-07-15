// MoviesDatails.jsx
import React, { useState, useEffect, Suspense, useRef } from "react";
import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useOutletContext,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoading } from "../redux/selectors";
import { getMoviesTrending } from "../api/api";
import css from "./MoviesDetails.module.css";
import { Loader } from "./Loader/Loader";
import sprite from "../helper/sprite.svg";
const MoviesDetails = () => {
  const location = useLocation();
  const loading = useSelector(selectLoading);
  const backLinkLocationRef = useRef(
    (location.state && location.state.from) ?? "/movies"
  );
  // console.log(location);
  // console.log(backLinkLocationRef);
  const { movieId } = useParams();
  // const [selectedLanguage, setSelectedLanguage] = useState(
  //   localStorage.getItem("selectedLanguage") || "en-US"
  // );
  const [title, setTitle] = useState(null);
  const [poster_path, setPoster_path] = useState(null);
  const [release_date, setRelease_date] = useState(null);
  const [overview, setOverview] = useState(null);
  const [vote_average, setVote_average] = useState(null);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState("");
  const { selectedLanguage } = useOutletContext(); // Получаем selectedLanguage из контекста

  const fetchMovies = async (language) => {
    try {
      const {
        poster_path,
        title,
        overview,
        release_date,
        vote_average,
        genres,
        // } = await getMoviesTrending(movieId);
      } = await getMoviesTrending(movieId, language); // Передаем выбранный язык

      setTitle(title);
      const [year, month, day] = release_date.split("-");

      // Преобразование месяца из числового формата в текстовый
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const monthName = months[parseInt(month, 10) - 1];

      // Объединение в нужном формате
      const formattedDate = `${day} ${monthName} ${year}`;

      // console.log(formattedDate);
      // Вывод: "27 February 2024"

      setRelease_date(formattedDate);
      setPoster_path(poster_path);

      // setRelease_date(release_date.slice(0, 4));

      setOverview(overview);
      setVote_average(Math.round(vote_average * 10));
      setGenres((prevGenres) => [...genres]);

      // console.log(poster_path);
      // console.log(title);
      // console.log(release_date);
    } catch (err) {
      setError(error.message);
    }
  };
  // console.log(movies);
  useEffect(() => {
    // Сохраняем выбранный язык в локальное хранилище при его изменении
    localStorage.setItem("selectedLanguage", selectedLanguage);
    fetchMovies(selectedLanguage);
    // Функция для обработки события изменения в локальном хранилище
    const handleStorageChange = (e) => {
      // if (e.key === "selectedLanguage") {
      //   setSelectedLanguage(e.newValue);
      // }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId, selectedLanguage]);

  // console.log(location);

  return (
    <div className={css.divGoBack}>
      <Link className={css.GoBack} to={backLinkLocationRef.current}>
        <button className={css.button_GoBack} type="button">
          <span>
            <svg className={css.svgGoBack}>
              <use href={`${sprite}#icon-arrow-left-gray`}></use>
            </svg>
          </span>
          Go back
        </button>
      </Link>

      {/* <Link to={location.state?.from ??'/movies'}> Go back</Link> */}
      <div className={css.divDetails}>
        <div className={css.movieDetailsText}>
          {" "}
          <img
            // className="center-block img-responsive"
            className={css.img}
            // width="250px"
            // height="100%"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            data-reactid=".1.1.0.0.1.0.0.0"
            key="movie-poster"
          />
          <h2>{`${title}`}</h2>
          <h4>{release_date}</h4>
          <p>User Score:{` ${vote_average}%`}</p>
          <h3>Overview</h3>
          <>{overview}</>
          <h3>Genres</h3>
          {genres.map((genre, index) => {
            return <p key={index}>{genre.name} </p>;
          })}
        </div>
      </div>
      <div>
        <p className={css.title}>Additional information</p>
        <ul className={css.listCast}>
          {/* <li>
            <NavLink to={`/movies/${moveId}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${moveId}/reviews`}>Reviews</NavLink>
          </li> */}
          <li>
            <Link to="trailer" state={{ selectedLanguage }}>
              Trailer
            </Link>
          </li>

          <li>
            <Link to="cast" state={{ selectedLanguage }}>
              Cast
            </Link>
          </li>

          <li>
            <Link to="reviews" state={{ selectedLanguage }}>
              Reviews
            </Link>
          </li>
          <li>
            <Link to="homepage">Home page</Link>
          </li>
        </ul>
        {/* <Suspense fallback={<div>Laoding...</div>}> */}
        <Suspense fallback={<Loader />}>
          <Outlet context={{ selectedLanguage }} />
        </Suspense>
      </div>
      {loading && <Loader />}
    </div>
  );
};
export default MoviesDetails;
