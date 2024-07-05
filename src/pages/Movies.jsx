// Movies.jsx
// import React, { useState, useEffect } from "react";

// import { Link, useLocation, useOutletContext } from "react-router-dom";
// import css from "./Movies.module.css";

// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";

// import { useSearchParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAllMovies } from "../redux/thunks";
// import {
//   selectLoading,
//   selectMovies,
//   selectTotalPages,
// } from "../redux/selectors";
// import Loader from "components/Loader/Loader";
// const Movies = () => {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const movies = useSelector(selectMovies) || [];
//   const totalPages = useSelector(selectTotalPages);
//   const loading = useSelector(selectLoading);
//   const [currentPage, setCurrentPage] = useState(1);
//   // const [totalPages, setTotalPages] = useState(1);
//   // const [movies, setMovies] = useState([]);

//   // const [searchInput, setSearchInput] = useState("");
//   // const [searchQuery, setSearchQuery] = useState("");
//   // const [searchedMovies, setSearchedMovies] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [searchQuery, setSearchQuery] = useSearchParams();

//   // const [selectedLanguage, setSelectedLanguage] = useState(
//   //   localStorage.getItem("selectedLanguage") || "en-US"
//   // );
//   const query = searchQuery.get("query") ?? "";
//   const { selectedLanguage } = useOutletContext();

//   // const params = useParams();
//   // console.log(params);
//   // const fetchMovies = async (page, language) => {
//   //   try {
//   //     const { results, total_pages } = await getAllMovies(
//   //       query,
//   //       page,
//   //       language
//   //     );

//   //     setMovies((prevMovies) => [...results]);
//   //     setTotalPages(total_pages);
//   //   } catch (err) {
//   //     console.log(err.message);
//   //   }
//   // };

//   console.log(query);
//   useEffect(() => {
//     // Сохраняем выбранный язык в локальное хранилище при его изменении
//     // localStorage.setItem("selectedLanguage", selectedLanguage);
//     // // fetchMovies(currentPage, selectedLanguage);
//     // dispatch(
//     //   fetchAllMovies({ query, page: currentPage, language: selectedLanguage })
//     // );
//     if (!query) {
//       dispatch(
//         fetchAllMovies({
//           page: currentPage,
//           language: selectedLanguage,
//           query,
//         })
//       );
//     }
//   }, [dispatch, currentPage, selectedLanguage, query]);

//   // Функция для обработки события изменения в локальном хранилище
//   // const handleStorageChange = (e) => {
//   //   // if (e.key === "selectedLanguage") {
//   //   //   setSelectedLanguage(e.newValue);
//   //   // }
//   // };

//   // window.addEventListener("storage", handleStorageChange);

//   // return () => {
//   //   window.removeEventListener("storage", handleStorageChange);
//   // };
//   // eslint-disable-next-line react-hooks/exhaustive-deps

//   const handleInputQuery = (event) => {
//     const textInput = event.target.value.trim().toLowerCase();
//     console.log(textInput);

//     if (textInput) {
//       setSearchQuery({ query: textInput });
//       setInputValue(textInput);
//     } else {
//       setSearchQuery({});
//       setInputValue("");
//     }
//   };
//   //   // Если в event.target.value  пустой обьект то записываем {}}
//   //   // Если в event.target.value не пустой обьект то записываем (query: event.target.value)

//   // Вызывается при отправке формы

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!inputValue) {
//       alert("Enter your request");

//       return;
//     }
//     setCurrentPage(1);
//     dispatch(
//       fetchAllMovies({ query: inputValue, page: 1, language: selectedLanguage })
//     );

//     setInputValue("");
//   };

//   // console.log(location);
//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handlePrevPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   return (
//     // <div className={css.divGoBack}>

//     <div className={css.divGoBack}>
//       {/* <Link to="/"> Go back</Link> */}
//       <div className={css.divForm}>
//         <form onSubmit={handleSubmit}>
//           <Box
//             className={css.box}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               padding: "10px 2px",
//               gap: "5px",
//             }}
//           >
//             <TextField
//               className={css.input}
//               type="text"
//               //  autocomplete="off"
//               //  autofocus
//               //  placeholder="Search images and photos"
//               name="title"
//               size="small"
//               sx={{ m: 1, width: "35ch", margin: 0 }}
//               style={{ backgroundColor: "#7e7575", color: "white" }}
//               // className="form-control"
//               onChange={handleInputQuery}
//               value={query || ""}
//               // Устанавливаем пустую строку, если значение query равно null
//               id="input-with-sx"
//               label="Search movies"
//               variant="outlined"

//               // margin="dense"
//             />
//             <Button
//               className={css.button}
//               type="submit"
//               variant="outlined"
//               style={{
//                 padding: "6.5px",
//               }}
//             >
//               Search
//             </Button>
//           </Box>

//           <Stack spacing={2} direction="row"></Stack>
//         </form>
//       </div>

//       <ul className={css.listMovies}>
//         {movies.map((mov, index) => {
//           return (
//             <li key={index}>
//               <Link to={`/${mov.id}`} state={{ from: location }}>
//                 <div className={css.home_div}>
//                   <img
//                     className="center-block img-responsive"
//                     width="150px"
//                     height="100%"
//                     src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
//                     alt={mov.title}
//                     data-reactid=".1.1.0.0.1.0.0.0"
//                     key="movie-poster"
//                   />
//                   {/* {mov.title} */}
//                   {`${mov.title} (${mov.release_date.slice(0, 4)})`}
//                 </div>
//               </Link>
//             </li>
//           );
//         })}
//       </ul>

//       <div className={css.pagination}>
//         <button onClick={handlePrevPage} disabled={currentPage === 1}>
//           Previous
//         </button>
//         <span className={css.span_pagination}>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button onClick={handleNextPage} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>
//       {loading && <Loader />}
//     </div>
//   );
// };

// export default Movies;

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

  useEffect(() => {
    const fetchMovies = ({
      query,
      page: currentPage,
      language: selectedLanguage,
    }) => {
      dispatch(
        fetchAllMovies({
          query,
          page: currentPage,
          language: selectedLanguage,
        })
      );
    };

    fetchMovies({
      query,
      page: currentPage,
      language: selectedLanguage,
    });
  }, [dispatch, currentPage, selectedLanguage, query]);

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
                "& fieldset": {
                  border: "none",
                  // Border color for the outlined input
                },
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
