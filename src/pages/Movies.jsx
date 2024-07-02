import React, { useState, useEffect } from "react";
import { getAllMovies } from "../api/api";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import css from "./Movies.module.css";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoading } from "../redux/selectors";
import Loader from "components/Loader/Loader";
const Movies = () => {
  const location = useLocation();
  const loading = useSelector(selectLoading);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [movies, setMovies] = useState([]);

  // const [searchInput, setSearchInput] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");
  // const [searchedMovies, setSearchedMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useSearchParams();

  // const [selectedLanguage, setSelectedLanguage] = useState(
  //   localStorage.getItem("selectedLanguage") || "en-US"
  // );
  const query = searchQuery.get("query") ?? "";
  const { selectedLanguage } = useOutletContext();
  // const ref = useRef(query);

  // const params = useParams();
  // console.log(params);
  const fetchMovies = async (page, language) => {
    try {
      const { results, total_pages } = await getAllMovies(
        query,
        page,
        language
      );

      setMovies((prevMovies) => [...results]);
      setTotalPages(total_pages);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    // Сохраняем выбранный язык в локальное хранилище при его изменении
    localStorage.setItem("selectedLanguage", selectedLanguage);
    fetchMovies(currentPage, selectedLanguage);
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
  }, [currentPage, selectedLanguage]);

  const handleInputQuery = (event) => {
    const textInput = event.target.value.trim().toLowerCase();

    if (textInput) {
      setSearchQuery({ query: textInput });
      setInputValue(textInput);
    } else {
      setSearchQuery({});
      setInputValue("");
    }
  };
  //   // Если в event.target.value  пустой обьект то записываем {}}
  //   // Если в event.target.value не пустой обьект то записываем (query: event.target.value)

  // Вызывается при отправке формы

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      alert("Enter your request");

      return;
    }
    fetchMovies();
    setInputValue("");
  };

  // console.log(location);
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    // <div className={css.divGoBack}>

    <div className={css.divGoBack}>
      {/* <Link to="/"> Go back</Link> */}
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 5px",
            gap: "5px",
          }}
        >
          <TextField
            className={css.input}
            type="text"
            //  autocomplete="off"
            //  autofocus
            //  placeholder="Search images and photos"
            name="title"
            size="small"
            sx={{ m: 1, width: "35ch", margin: 0 }}
            style={{ backgroundColor: "#7e7575", color: "white" }}
            // className="form-control"
            onChange={handleInputQuery}
            value={query || ""}
            // Устанавливаем пустую строку, если значение query равно null
            id="input-with-sx"
            label="Search movies"
            variant="outlined"

            // margin="dense"
          />
          <Button
            className={css.button}
            type="submit"
            variant="outlined"
            style={{
              padding: "6.5px",
            }}
          >
            Search
          </Button>
        </Box>

        <Stack spacing={2} direction="row"></Stack>
      </form>

      <ul className={css.listMovies}>
        {movies.map((mov, index) => {
          return (
            <li key={index}>
              <Link to={`/${mov.id}`} state={{ from: location }}>
                <div className={css.home_div}>
                  <img
                    className="center-block img-responsive"
                    width="150px"
                    height="100%"
                    src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                    alt={mov.title}
                    data-reactid=".1.1.0.0.1.0.0.0"
                    key="movie-poster"
                  />
                  {/* {mov.title} */}
                  {`${mov.title} (${mov.release_date.slice(0, 4)})`}
                </div>
              </Link>
            </li>
          );
        })}
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
      {loading && <div>{Loader()}</div>}
    </div>
  );
};

export default Movies;

// 2 вариант без кнопки поиска
// import React, { useState, useEffect } from "react";
// import { getAllMovies } from "../api/api";
// import { Link, useLocation, useParams } from "react-router-dom";
// import css from "./Movies.module.css";

// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";

// import { useSearchParams } from "react-router-dom";
// const Movies = () => {
//   const { moveId } = useParams();
//   console.log("moveId=??????", moveId);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const query = searchParams.get("query") ?? "";
//   // console.log(query);
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);
//   const location = useLocation();
//   // const params = useParams();
//   // console.log(params);
//   const fetchMovies = async () => {
//     try {
//       const { results } = await getAllMovies(query);
//       //   console.log(results);
//       setMovies((prevMovies) => [...results]);
//     } catch (err) {
//       setError(error.message);
//     }
//   };
//   //   console.log(movies);
//   useEffect(() => {
//     fetchMovies();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [query]);

//   const updateQueryString = (event) => {
//     const moviesIdVaiue = event.target.value.trim();
//     if (moviesIdVaiue === "") {
//       return setSearchParams({});
//     }
//     setSearchParams({ query: moviesIdVaiue });
//     // Если в event.target.value  пустой обьект то записываем {}}
//     // Если в event.target.value не пустой обьект то записываем (query: event.target.value)
//   };
//   // const visibleMovies = movies.filter((movie) => movie.includes(query));
//   console.log(location);

//   return (
//     // <div className={css.divGoBack}>

//     <div className={css.divGoBack}>
//       <Link to="/"> Go back</Link>
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <TextField
//           //  className="input"
//           type="text"
//           //  autocomplete="off"
//           //  autofocus
//           //  placeholder="Search images and photos"
//           name="title"
//           size="small"
//           sx={{ m: 1, width: "35ch" }}
//           style={{ backgroundColor: "white" }}
//           className="form-control"
//           onChange={updateQueryString}
//           value={query || ""} // Устанавливаем пустую строку, если значение query равно null
//           id="input-with-sx"
//           label="Search movies"
//           variant="outlined"
//           margin="dense"
//         />
//         <Button variant="outlined">Search</Button>
//       </Box>

//       <Stack spacing={2} direction="row"></Stack>

//       <p>Movies страница</p>
//       <ul className={css.listMovies}>
//         {movies.map((movie, index) => {
//           return (
//             <li key={index}>
//               <Link to={`${movie.id}`} state={{ from: location }}>
//                 {movie.title}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//     // </div>
//   );
// };
// export default Movies;
