// // Movies.jsx с пагинацией

// Movies.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import css from "./Movies.module.css";
import { BackToTopButton } from "./Home.styled";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
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
import { Loader } from "components/Loader/Loader";
import Pagination from "components/Pagination/Pagination"; //
import { toast } from "react-hot-toast";

const Movies = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const movies = useSelector(selectAllMovies) || [];
  const defaultMovies = useSelector(selectDefaultMovies) || [];
  const totalPages = useSelector(selectTotalPages) || 1;
  const loading = useSelector(selectLoading);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get("query") ?? "";
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { selectedLanguage } = useOutletContext();

  // Fetch movies on mount or query/language change
  useEffect(() => {
    setCurrentPage(1);
    if (query) {
      dispatch(
        fetchAllMovies({
          query,
          page: 1,
          language: selectedLanguage,
        })
      );
    } else {
      dispatch(
        fetchDefaultMovies({
          page: 1,
          language: selectedLanguage,
        })
      );
    }
  }, [dispatch, selectedLanguage, query]);

  // Infinite scroll for default movies
  useEffect(() => {
    if (!query) {
      const handleScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 300 &&
          !loading &&
          currentPage < totalPages
        ) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      };

      setShowBackToTop(window.scrollY > 100);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [dispatch, loading, currentPage, totalPages, query, selectedLanguage]);

  // Fetch movies for pagination
  useEffect(() => {
    if (currentPage > 1 && currentPage <= totalPages) {
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
    }
  }, [dispatch, currentPage, selectedLanguage, query, totalPages]);

  // Handle search input
  const handleInputQuery = (event) => {
    setInputValue(event.target.value.trim().toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      setSearchQuery({ query: "" });
      toast.error("Enter your request");
      return;
    }
    setCurrentPage(1);
    setSearchQuery({ query: inputValue });
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowBackToTop(false);
  };

  // const handlePageChange = (newPage) => {
  //   if (newPage > 0 && newPage <= totalPages) {
  //     setCurrentPage(newPage);
  //   }
  // };

  // Helper function to safely get movie release year
  const getReleaseYear = (releaseDate) => {
    return releaseDate ? releaseDate.slice(0, 4) : "Unknown";
  };

  return (
    <div className={css.divGoBack}>
      <div className={css.divForm}>
        <form onSubmit={handleSubmit}>
          <Box
            className="box"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 0.5px",
              gap: "5px",
            }}
          >
            <TextField
              type="text"
              size="small"
              onChange={handleInputQuery}
              value={inputValue}
              label="Search movies"
              variant="outlined"
              sx={{
                backgroundColor: "#7e7575",
                borderRadius: "4px",
                color: "white",
              }}
            />
            <Button type="submit" variant="outlined">
              Search
            </Button>
          </Box>
        </form>
      </div>
      {!query ? (
        <div>
          <ul className={css.listMovies}>
            {defaultMovies.map((mov, index) => (
              <li key={index}>
                <Link to={`/${mov.id}`} state={{ from: location }}>
                  <div className={css.home_div}>
                    <img
                      width="150px"
                      height="100%"
                      src={
                        mov.poster_path
                          ? `https://image.tmdb.org/t/p/w500/${mov.poster_path}`
                          : "/placeholder.png"
                      }
                      alt={mov.title || "Movie Poster"}
                    />
                    {`${mov.title || "Unknown Title"} (${getReleaseYear(
                      mov.release_date
                    )})`}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <BackToTopButton $visible={showBackToTop} onClick={handleBackToTop}>
            ↑
          </BackToTopButton>
        </div>
      ) : (
        <div>
          <ul className={css.listMovies}>
            {movies.map((mov, index) => (
              <li key={index}>
                <Link to={`/${mov.id}`} state={{ from: location }}>
                  <div className={css.home_div}>
                    <img
                      width="150px"
                      height="100%"
                      src={
                        mov.poster_path
                          ? `https://image.tmdb.org/t/p/w500/${mov.poster_path}`
                          : "/placeholder.png"
                      }
                      alt={mov.title || "Movie Poster"}
                    />
                    {`${mov.title || "Unknown Title"} (${getReleaseYear(
                      mov.release_date
                    )})`}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <Pagination
            pageCount={totalPages}
            currentPage={currentPage - 1}
            setSearchParams={(params) => {
              setCurrentPage(params.page || 1);
            }}
            params={{ query }}
          />
          <div className={css.pagination}>
            {/* <BackToTopButton $visible={showBackToTop} onClick={handleBackToTop}>
              ↑
            </BackToTopButton> */}
          </div>
        </div>
      )}
      {loading && <Loader />}
    </div>
  );
};

export default Movies;
