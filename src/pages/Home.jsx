// ==========================================
// бесконечный скролл
// import React, { useState, useEffect } from "react";
// import { getAllMoviesTrending } from "../api/api";
// import { Link, useLocation } from "react-router-dom";
// import css from "./Home.module.css";
// import { Select, BackToTopButton } from "./Home.styled";
// import Loader from "components/Loader/Loader";

// const Home = () => {
//   const location = useLocation();
//   const [movies, setMovies] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedLanguage, setSelectedLanguage] = useState(
//     localStorage.getItem("selectedLanguage") || "en-US"
//   );
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);
//   const [showBackToTop, setShowBackToTop] = useState(false);

//   const fetchMovies = async (page, language) => {
//     setLoading(true);
//     try {
//       // const limit = 40; // Запрашиваем сразу 40 фильмов
//       const page1Results = await getAllMoviesTrending(page, language);
//       const page2Results = await getAllMoviesTrending(page + 1, language);
//       const combinedResults = [
//         ...page1Results.results,
//         ...page2Results.results,
//       ];
//       const total_pages = Math.max(
//         page1Results.total_pages,
//         page2Results.total_pages
//       );

//       if (page === 1) {
//         setMovies(combinedResults); // Если страница первая, устанавливаем новый список фильмов
//       } else {
//         setMovies((prevMovies) => [...prevMovies, ...combinedResults]); // Иначе добавляем к текущему списку
//       }

//       setHasMore(page + 1 < total_pages); // Устанавливаем hasMore в зависимости от текущей и общего числа страниц
//     } catch (err) {
//       console.log(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     localStorage.setItem("selectedLanguage", selectedLanguage);
//     setCurrentPage(1); // Сбрасываем текущую страницу при изменении языка
//     setMovies([]); // Очищаем список фильмов при изменении языка
//   }, [selectedLanguage]);

//   useEffect(() => {
//     fetchMovies(currentPage, selectedLanguage); // Вызываем загрузку фильмов при изменении currentPage или selectedLanguage
//   }, [currentPage, selectedLanguage]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop >=
//           document.documentElement.offsetHeight - 100 &&
//         !loading &&
//         hasMore
//       ) {
//         setCurrentPage((prevPage) => prevPage + 2); // Пагинация при скролле вниз, увеличиваем на 2 страницы
//       }
//       if (window.scrollY > 300) {
//         setShowBackToTop(true); // Показать кнопку "Наверх" при прокрутке вниз
//       } else {
//         setShowBackToTop(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [loading, hasMore]);

//   const handleBackToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" }); // Плавный скролл наверх
//   };

//   return (
//     <div className={css.homeMovies}>
//       <div>
//         <Select
//           value={selectedLanguage}
//           onChange={(e) => setSelectedLanguage(e.target.value)}
//           className={css.selectedLanguage}
//         >
//           <option value="en-US">En</option>
//           <option value="de-DE">De</option>
//           <option value="uk-UA">Uk</option>
//           <option value="ru-RU">Ru</option>
//           <option value="ar-SA">العربية</option>
//         </Select>
//       </div>
//       <h1>Trending today</h1>

//       <div className={css.home}>
//         {movies.map((mov, index) => (
//           <Link
//             key={`${mov.id}-${index}`}
//             to={`${mov.id}`}
//             state={{ from: location }}
//           >
//             <div className={css.home_div}>
//               <img
//                 className="center-block img-responsive"
//                 width="150px"
//                 height="100%"
//                 src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
//                 alt={mov.title}
//               />
//               {`${mov.title} (${mov.release_date.slice(0, 4)})`}
//             </div>
//           </Link>
//         ))}
//       </div>
//       <BackToTopButton $visible={showBackToTop} onClick={handleBackToTop}>
//         ↑
//       </BackToTopButton>
//       {loading && <div>{Loader()}</div>}
//       {/* {loading && <div>Loading...</div>} */}
//     </div>
//   );
// };

// export default Home;

// =====================================================
// with paginations 123...567
// import React, { useState, useEffect } from "react";
// import { getAllMoviesTrending } from "../api/api";
// import { Link, useLocation } from "react-router-dom";
// import css from "./Home.module.css";
// // import styled from "styled-components";

// import { Select } from "./Home.styled";

// const Home = () => {
//   const location = useLocation();
//   const [movies, setMovies] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   // Используем локальное хранилище для сохранения выбранного языка
//   const [selectedLanguage, setSelectedLanguage] = useState(
//     localStorage.getItem("selectedLanguage") || "en-US"
//   );

//   // const [selectedLanguage, setSelectedLanguage] = useState("en-US");
//   // Значение по умолчанию - английский

//   const fetchMovies = async (page, language) => {
//     try {
//       // const { results, total_pages } = await getAllMoviesTrending(page);
//       const { results, total_pages } = await getAllMoviesTrending(
//         page,
//         language
//       );

//       setMovies(results);
//       setTotalPages(total_pages);
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   useEffect(() => {
//     // Сохраняем выбранный язык в локальное хранилище при его изменении
//     localStorage.setItem("selectedLanguage", selectedLanguage);
//     fetchMovies(currentPage, selectedLanguage);
//     // Функция для обработки события изменения в локальном хранилище
//     const handleStorageChange = (e) => {
//       if (e.key === "selectedLanguage") {
//         setSelectedLanguage(e.newValue);
//       }
//     };

//     window.addEventListener("storage", handleStorageChange);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//     // eslint-disable-next-line
//   }, [selectedLanguage]);

//   useEffect(() => {
//     fetchMovies(currentPage, selectedLanguage);
//     // eslint-disable-next-line
//   }, [currentPage, selectedLanguage]);

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handlePrevPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };
//   // const handleLanguageChange = (e) => {
//   //   setSelectedLanguage(e.target.value);
//   // };
//   return (
//     <div className={css.homeMovies}>
//       {/* <section className={css.selectedLanguage}> */}
//       {/* <div className={css.selectedLanguage}> */}
//       <Select
//         value={selectedLanguage}
//         // onChange={handleLanguageChange}
//         onChange={(e) => setSelectedLanguage(e.target.value)}
//         className={css.selectedLanguage}
//       >
//         <option value="en-US">En</option>
//         <option value="de-DE">De</option>
//         <option value="uk-UA">Uk</option>
//         <option value="ru-RU">Ru</option>
//         <option value="ar-SA">العربية</option>
//       </Select>
//       {/* </section> */}
//       {/* </div> */}
//       <h1>Trending today</h1>

//       <div className={css.home}>
//         {movies.map((mov, index) => {
//           return (
//             <Link key={index} to={`${mov.id}`} state={{ from: location }}>
//               <div className={css.home_div}>
//                 <img
//                   className="center-block img-responsive"
//                   width="150px"
//                   height="100%"
//                   src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
//                   alt={mov.title}
//                   data-reactid=".1.1.0.0.1.0.0.0"
//                   key="movie-poster"
//                 />
//                 {`${mov.title} (${mov.release_date.slice(0, 4)})`}
//               </div>
//             </Link>
//           );
//         })}
//       </div>

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
//     </div>
//   );
// };

// export default Home;

// =====================================================
//Redux-toolkit with paginations 123...567
// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import css from "./Home.module.css";
// import { Select } from "./Home.styled";
// import { fetchMovies } from "../redux/thunks";
// import {
//   selectMovies,
//   selectLoading,
//   selectTotalPages,
// } from "../redux/selectors";

// const Home = () => {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const movies = useSelector(selectMovies) || [];
//   const loading = useSelector(selectLoading);
//   const totalPages = useSelector(selectTotalPages);
//   const [currentPage, setCurrentPage] = useState(1);
//   // const [totalPages, setTotalPages] = useState(1);
//   const [selectedLanguage, setSelectedLanguage] = useState(
//     localStorage.getItem("selectedLanguage") || "en-US"
//   );

//   useEffect(() => {
//     localStorage.setItem("selectedLanguage", selectedLanguage);
//     dispatch(fetchMovies({ page: currentPage, language: selectedLanguage }));
//   }, [dispatch, selectedLanguage, currentPage]);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   return (
//     <div className={css.homeMovies}>
//       <Select
//         value={selectedLanguage}
//         onChange={(e) => setSelectedLanguage(e.target.value)}
//         className={css.selectedLanguage}
//       >
//         <option value="en-US">En</option>
//         <option value="de-DE">De</option>
//         <option value="uk-UA">Uk</option>
//         <option value="ru-RU">Ru</option>
//         <option value="ar-SA">العربية</option>
//       </Select>
//       <h1>Trending today</h1>

//       <div className={css.home}>
//         {movies.map((mov, index) => (
//           <Link key={index} to={`${mov.id}`} state={{ from: location }}>
//             <div className={css.home_div}>
//               <img
//                 className="center-block img-responsive"
//                 width="150px"
//                 height="100%"
//                 src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
//                 alt={mov.title}
//                 data-reactid=".1.1.0.0.1.0.0.0"
//                 key="movie-poster"
//               />
//               {`${mov.title} (${mov.release_date.slice(0, 4)})`}
//             </div>
//           </Link>
//         ))}
//       </div>

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
//       {loading && <div>Loading...</div>}
//     </div>
//   );
// };

// export default Home;

// ==========================================
// Redux-toolkit бесконечный скролл
// Home.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import css from "./Home.module.css";
import { BackToTopButton } from "./Home.styled";
import { fetchAllMoviesTrending } from "../redux/thunks";
import {
  selectMovies,
  selectLoading,
  selectTotalPages,
} from "../redux/selectors";
import { Loader } from "components/Loader/Loader";

const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies) || [];
  const loading = useSelector(selectLoading);
  const totalPages = useSelector(selectTotalPages);
  const [currentPage, setCurrentPage] = useState(1);

  const [showBackToTop, setShowBackToTop] = useState(false);
  const { selectedLanguage } = useOutletContext(); // Получаем selectedLanguage из контекста

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
    setCurrentPage(1); // Reset current page when language changes
    dispatch(fetchAllMoviesTrending({ page: 2, language: selectedLanguage }));
  }, [dispatch, selectedLanguage]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100 &&
        !loading &&
        currentPage < totalPages
      ) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, currentPage, totalPages]);

  useEffect(() => {
    if (currentPage > 1 && currentPage <= totalPages) {
      dispatch(
        fetchAllMoviesTrending({
          page: currentPage,
          language: selectedLanguage,
        })
      );
    }
  }, [dispatch, currentPage, selectedLanguage, totalPages]);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={css.homeMovies}>
      <h1>Trending today</h1>

      <div className={css.home}>
        {movies.map((mov, index) => (
          <Link key={index} to={`${mov.id}`} state={{ from: location }}>
            <div className={css.home_div}>
              <img
                className="center-block img-responsive"
                width="150px"
                height="100%"
                src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                alt={mov.title}
              />
              {`${mov.title} (${mov.release_date.slice(0, 4)})`}
            </div>
          </Link>
        ))}
      </div>
      <BackToTopButton $visible={showBackToTop} onClick={handleBackToTop}>
        ↑
      </BackToTopButton>
      {loading && <Loader />}
    </div>
  );
};

export default Home;
