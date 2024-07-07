// Movies.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import css from "./Movies.module.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMovies, fetchDefaultMovies } from "../redux/thunks";
import {
  selectAllMovies,
  selectLoading,
  selectTotalPages,
  selectDefaultMovies,
} from "../redux/selectors";
import Loader from "components/Loader/Loader";

const Movies = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const movies = useSelector(selectAllMovies) || [];
  //
  const defaultMovies = useSelector(selectDefaultMovies) || [];

  const totalPages = useSelector(selectTotalPages);
  const loading = useSelector(selectLoading);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useSearchParams();

  const query = searchQuery.get("query") ?? "";
  const { selectedLanguage } = useOutletContext();

  useEffect(() => {
    setCurrentPage(1);
    dispatch(
      fetchDefaultMovies({
        page: 1,
        language: selectedLanguage,
      })
    );
  }, [dispatch, selectedLanguage]);

  // useEffect(() => {
  //   const fetchMovies = ({
  //     query,
  //     page: currentPage,
  //     language: selectedLanguage,
  //   }) => {
  //     dispatch(
  //       fetchAllMovies({
  //         query,
  //         page: currentPage,
  //         language: selectedLanguage,
  //       })
  //     );
  //   };

  useEffect(() => {
    if (query) {
      dispatch(
        fetchAllMovies({
          query,
          page: currentPage,
          language: selectedLanguage,
        })
      );
    } else {
      dispatch(
        fetchDefaultMovies({
          page: currentPage,
          language: selectedLanguage,
        })
      );
    }
  }, [dispatch, currentPage, selectedLanguage, query]);
  //   fetchMovies({
  //     query,
  //     page: currentPage,
  //     language: selectedLanguage,
  //   });
  // }, [dispatch, currentPage, selectedLanguage, query]);

  // useEffect(() => {
  //   dispatch(
  //     fetchAllMovies({ query, page: currentPage, language: selectedLanguage })
  //   );
  // }, [dispatch, currentPage, selectedLanguage, query]);

  const handleInputQuery = (event) => {
    const textInput = event.target.value.trim().toLowerCase();
    setInputValue(textInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      alert("Enter your request");
      return;
    }

    setCurrentPage(1);
    setSearchQuery({ query: inputValue });
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    dispatch(
      fetchDefaultMovies({ page: currentPage * 2, language: selectedLanguage })
    );
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    dispatch(
      fetchDefaultMovies({
        page: (currentPage - 1) * 2,
        language: selectedLanguage,
      })
    );
  };

  return (
    <div className={css.divGoBack}>
      <div className={css.divForm}>
        <form onSubmit={handleSubmit}>
          <Box
            className={css.box}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 0",
              gap: "5px",
            }}
          >
            <TextField
              className={css.input}
              type="text"
              name="title"
              size="small"
              sx={{
                m: 1,
                width: "35ch",
                margin: 0,
                borderRadius: "4px",
                // "& fieldset": {
                //   border: "none",
                //   // Border color for the outlined input
                // },
              }}
              style={{
                backgroundColor: "#7e7575",
                color: "white",
              }}
              // #c7dfee #7e7575
              InputLabelProps={{
                style: { zIndex: 100000 },
                className: css.inputLabel,
              }}
              onChange={handleInputQuery}
              value={inputValue}
              id="input-with-sx"
              label="Search movies"
              variant="outlined"
            />
            <Button
              type="submit"
              variant="outlined"
              sx={{
                padding: "6px 127px",
                "@media screen and (min-width: 768px)": {
                  padding: "6px",
                },
              }}
            >
              Search
            </Button>
          </Box>
          <Stack spacing={2} direction="row"></Stack>
        </form>
      </div>

      <ul className={css.listMovies}>
        {(!query ? defaultMovies : movies).map((mov, index) => (
          <li key={index}>
            {loading && <Loader />}
            <Link to={`/${mov.id}`} state={{ from: location }}>
              <div className={css.home_div}>
                <img
                  className="center-block img-responsive"
                  width="150px"
                  height="100%"
                  src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                  alt={mov.title}
                  key="movie-poster"
                />
                {`${mov.title} (${mov.release_date.slice(0, 4)})`}
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className={css.pagination}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span className={css.span_pagination}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default Movies;
