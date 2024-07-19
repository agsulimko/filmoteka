// // Movies.jsx с пагинацией
// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useOutletContext } from "react-router-dom";
// import css from "./Movies.module.css";
// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import { useSearchParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAllMovies, fetchDefaultMovies } from "../redux/thunks";
// import {
//   selectAllMovies,
//   selectLoading,
//   selectTotalPages,
//   selectDefaultMovies,
// } from "../redux/selectors";
// import { Loader } from "components/Loader/Loader";
// import { toast } from "react-hot-toast";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// const Movies = () => {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const movies = useSelector(selectAllMovies) || [];
//   //
//   const defaultMovies = useSelector(selectDefaultMovies) || [];

//   const totalPages = useSelector(selectTotalPages);
//   const loading = useSelector(selectLoading);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [inputValue, setInputValue] = useState("");
//   const [searchQuery, setSearchQuery] = useSearchParams();

//   const query = searchQuery.get("query") ?? "";
//   const { selectedLanguage } = useOutletContext();

//   useEffect(() => {
//     setCurrentPage(1);
//     dispatch(
//       fetchDefaultMovies({
//         page: 1,
//         language: selectedLanguage,
//       })
//     );
//   }, [dispatch, selectedLanguage]);

//   // useEffect(() => {
//   //   const fetchMovies = ({
//   //     query,
//   //     page: currentPage,
//   //     language: selectedLanguage,
//   //   }) => {
//   //     dispatch(
//   //       fetchAllMovies({
//   //         query,
//   //         page: currentPage,
//   //         language: selectedLanguage,
//   //       })
//   //     );
//   //   };

//   useEffect(() => {
//     if (query) {
//       dispatch(
//         fetchAllMovies({
//           query,
//           page: currentPage,
//           language: selectedLanguage,
//         })
//       );
//     } else {
//       dispatch(
//         fetchDefaultMovies({
//           page: currentPage,
//           language: selectedLanguage,
//         })
//       );
//     }
//   }, [dispatch, currentPage, selectedLanguage, query]);
//   //   fetchMovies({
//   //     query,
//   //     page: currentPage,
//   //     language: selectedLanguage,
//   //   });
//   // }, [dispatch, currentPage, selectedLanguage, query]);

//   // useEffect(() => {
//   //   dispatch(
//   //     fetchAllMovies({ query, page: currentPage, language: selectedLanguage })
//   //   );
//   // }, [dispatch, currentPage, selectedLanguage, query]);

//   const handleInputQuery = (event) => {
//     const textInput = event.target.value.trim().toLowerCase();
//     setInputValue(textInput);
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   if (!inputValue) {
//   //     alert("Enter your request");
//   //     return;
//   //   }

//   //   setCurrentPage(1);
//   //   setSearchQuery({ query: inputValue });
//   // };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const theme = localStorage.getItem("theme");
//     if (!inputValue) {
//       setSearchQuery({ query: "" });

//       toast.error("Enter your request", {
//         autoClose: 5000,
//         position: "top-center",

//         style: {
//           marginTop: "130px",
//           // background: "#efede8",
//           background: theme === "theme-dark" ? "#333" : "#efede8",
//           color: theme === "theme-dark" ? "#fff" : "#000",
//         },
//       });
//       return;
//     } else {
//       setCurrentPage(1);
//       setSearchQuery({ query: inputValue });
//     }
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//     dispatch(
//       fetchDefaultMovies({ page: currentPage * 2, language: selectedLanguage })
//     );
//   };

//   const handlePrevPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//     dispatch(
//       fetchDefaultMovies({
//         page: (currentPage - 1) * 2,
//         language: selectedLanguage,
//       })
//     );
//   };

//   return (
//     <div className={css.divGoBack}>
//       <div className={css.divForm}>
//         <form onSubmit={handleSubmit}>
//           <Box
//             className="box"
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               padding: "10px 0.5px",
//               gap: "5px",
//               "@media screen and (min-width: 768px)": {
//                 // paddingLeft: "168px",
//                 // paddingRight: "168px",
//               },
//               "@media screen and (min-width: 1440px)": {
//                 // paddingLeft: "498px",
//                 // paddingRight: "498px",
//               },
//             }}
//           >
//             <TextField
//               className="input"
//               type="text"
//               name="title"
//               size="small"
//               sx={{
//                 m: 1,
//                 // width: "35ch",
//                 margin: 0,
//                 borderRadius: "4px",
//                 // "& fieldset": {
//                 //   border: "none",
//                 //   // Border color for the outlined input
//                 // },
//               }}
//               style={{
//                 backgroundColor: "#7e7575",
//                 color: "white",
//               }}
//               // #c7dfee #7e7575
//               InputLabelProps={{
//                 // style: { zIndex: 100000 },
//                 className: css.inputLabel,
//               }}
//               onChange={handleInputQuery}
//               value={inputValue}
//               id="input-with-sx"
//               label="Search movies"
//               variant="outlined"
//             />
//             <Button
//               className="custom-button"
//               type="submit"
//               variant="outlined"
//               sx={{
//                 // padding: "6px 125px",
//                 "@media screen and (min-width: 768px)": {
//                   padding: "6px",
//                 },
//               }}
//             >
//               Search
//             </Button>
//           </Box>
//           <Stack spacing={2} direction="row"></Stack>
//         </form>
//       </div>

//       <ul className={css.listMovies}>
//         {(!query ? defaultMovies : movies).map((mov, index) => (
//           <li key={index}>
//             {loading && <Loader />}
//             <Link to={`/${mov.id}`} state={{ from: location }}>
//               <div className={css.home_div}>
//                 <img
//                   className="center-block img-responsive"
//                   width="150px"
//                   height="100%"
//                   src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
//                   alt={mov.title}
//                   key="movie-poster"
//                 />
//                 {`${mov.title} (${mov.release_date.slice(0, 4)})`}
//               </div>
//             </Link>
//           </li>
//         ))}
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

// ========================================

// ===========================================

// ++++++++++++++++++++++++++++++
// Movies.jsx
// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useOutletContext } from "react-router-dom";
// import css from "./Movies.module.css";
// import { BackToTopButton } from "./Home.styled";
// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import { useSearchParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAllMovies, fetchDefaultMovies } from "../redux/thunks";
// import {
//   selectAllMovies,
//   selectLoading,
//   selectTotalPages,
//   selectDefaultMovies,
// } from "../redux/selectors";
// import { Loader } from "components/Loader/Loader";
// import { toast } from "react-hot-toast";

// const Movies = () => {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const movies = useSelector(selectAllMovies) || [];
//   const defaultMovies = useSelector(selectDefaultMovies) || [];
//   const totalPages = useSelector(selectTotalPages);
//   const loading = useSelector(selectLoading);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [inputValue, setInputValue] = useState("");
//   const [searchQuery, setSearchQuery] = useSearchParams();
//   const query = searchQuery.get("query") ?? "";
//   const [showBackToTop, setShowBackToTop] = useState(false);
//   const { selectedLanguage } = useOutletContext();

//   useEffect(() => {
//     setCurrentPage(1);
//     if (query) {
//       dispatch(
//         fetchAllMovies({
//           query,
//           page: 2,
//           language: selectedLanguage,
//         })
//       );
//     } else {
//       dispatch(
//         fetchDefaultMovies({
//           page: 2,
//           language: selectedLanguage,
//         })
//       );
//     }
//   }, [dispatch, selectedLanguage, query]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop >=
//           document.documentElement.offsetHeight - 300 &&
//         !loading &&
//         currentPage < totalPages
//       ) {
//         setCurrentPage((prevPage) => prevPage + 1);
//       }
//     };

//     if (window.scrollY > 100) {
//       setShowBackToTop(true);
//     } else {
//       setShowBackToTop(false);
//     }

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [loading, currentPage, totalPages]);

//   useEffect(() => {
//     if (currentPage > 1 && currentPage <= totalPages) {
//       if (query) {
//         dispatch(
//           fetchAllMovies({
//             query,
//             page: currentPage,
//             language: selectedLanguage,
//           })
//         );
//       } else {
//         dispatch(
//           fetchDefaultMovies({
//             page: currentPage,
//             language: selectedLanguage,
//           })
//         );
//       }
//     }
//   }, [dispatch, currentPage, selectedLanguage, query, totalPages]);

//   const handleInputQuery = (event) => {
//     const textInput = event.target.value.trim().toLowerCase();
//     setInputValue(textInput);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const theme = localStorage.getItem("theme");
//     if (!inputValue) {
//       setSearchQuery({ query: "" });
//       toast.error("Enter your request", {
//         autoClose: 5000,
//         position: "top-center",
//         style: {
//           marginTop: "130px",
//           background: theme === "theme-dark" ? "#333" : "#efede8",
//           color: theme === "theme-dark" ? "#fff" : "#000",
//         },
//       });
//       return;
//     } else {
//       setCurrentPage(1);
//       setSearchQuery({ query: inputValue });
//     }
//   };

//   const handleBackToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setShowBackToTop(false);
//   };

//   return (
//     <div className={css.divGoBack}>
//       <div className={css.divForm}>
//         <form onSubmit={handleSubmit}>
//           <Box
//             className="box"
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               padding: "10px 0.5px",
//               gap: "5px",
//             }}
//           >
//             <TextField
//               className="input"
//               type="text"
//               name="title"
//               size="small"
//               sx={{
//                 m: 1,
//                 margin: 0,
//                 borderRadius: "4px",
//               }}
//               style={{
//                 backgroundColor: "#7e7575",
//                 color: "white",
//               }}
//               InputLabelProps={{
//                 className: css.inputLabel,
//               }}
//               onChange={handleInputQuery}
//               value={inputValue}
//               id="input-with-sx"
//               label="Search movies"
//               variant="outlined"
//             />
//             <Button
//               className="custom-button"
//               type="submit"
//               variant="outlined"
//               sx={{
//                 "@media screen and (min-width: 768px)": {
//                   padding: "6px",
//                 },
//               }}
//             >
//               Search
//             </Button>
//           </Box>
//           <Stack spacing={2} direction="row"></Stack>
//         </form>
//       </div>
//       {!query ? (
//         <div>
//           <ul className={css.listMovies}>
//             {defaultMovies.map((mov, index) => (
//               <li key={index}>
//                 {loading && <Loader />}
//                 <Link to={`/${mov.id}`} state={{ from: location }}>
//                   <div className={css.home_div}>
//                     <img
//                       className="center-block img-responsive"
//                       width="150px"
//                       height="100%"
//                       src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
//                       alt={mov.title}
//                       key="movie-poster"
//                     />
//                     {`${mov.title} (${mov.release_date.slice(0, 4)})`}
//                   </div>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           <BackToTopButton $visible={showBackToTop} onClick={handleBackToTop}>
//             ↑
//           </BackToTopButton>
//         </div>
//       ) : (
//         <div>
//           <ul className={css.listMovies}>
//             {movies.map((mov, index) => (
//               <li key={index}>
//                 {loading && <Loader />}
//                 <Link to={`/${mov.id}`} state={{ from: location }}>
//                   <div className={css.home_div}>
//                     <img
//                       className="center-block img-responsive"
//                       width="150px"
//                       height="100%"
//                       src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
//                       alt={mov.title}
//                       key="movie-poster"
//                     />
//                     {`${mov.title} (${mov.release_date.slice(0, 4)})`}
//                   </div>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {loading && <Loader />}
//     </div>
//   );
// };

// export default Movies;
import React, { useState, useEffect } from "react";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import css from "./Movies.module.css";
import { BackToTopButton } from "./Home.styled";
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
import { Loader } from "components/Loader/Loader";
import { toast } from "react-hot-toast";

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
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { selectedLanguage } = useOutletContext();

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
          page: 2,
          language: selectedLanguage,
        })
      );
    }
  }, [dispatch, selectedLanguage, query]);

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

      if (window.scrollY > 100) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [loading, currentPage, totalPages, query]);

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

  const handleInputQuery = (event) => {
    const textInput = event.target.value.trim().toLowerCase();
    setInputValue(textInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const theme = localStorage.getItem("theme");
    if (!inputValue) {
      setSearchQuery({ query: "" });
      toast.error("Enter your request", {
        autoClose: 5000,
        position: "top-center",
        style: {
          marginTop: "130px",
          background: theme === "theme-dark" ? "#333" : "#efede8",
          color: theme === "theme-dark" ? "#fff" : "#000",
        },
      });
      return;
    } else {
      setCurrentPage(1);
      setSearchQuery({ query: inputValue });
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowBackToTop(false);
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
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
              className="input"
              type="text"
              name="title"
              size="small"
              sx={{
                m: 1,
                margin: 0,
                borderRadius: "4px",
              }}
              style={{
                backgroundColor: "#7e7575",
                color: "white",
              }}
              InputLabelProps={{
                className: css.inputLabel,
              }}
              onChange={handleInputQuery}
              value={inputValue}
              id="input-with-sx"
              label="Search movies"
              variant="outlined"
            />
            <Button
              className="custom-button"
              type="submit"
              variant="outlined"
              sx={{
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
      {!query ? (
        <div>
          <ul className={css.listMovies}>
            {defaultMovies.map((mov, index) => (
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
          <BackToTopButton $visible={showBackToTop} onClick={handleBackToTop}>
            ↑
          </BackToTopButton>
        </div>
      ) : (
        <div>
          <ul className={css.listMovies}>
            {movies.map((mov, index) => (
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
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}

      {loading && <Loader />}
    </div>
  );
};

export default Movies;
