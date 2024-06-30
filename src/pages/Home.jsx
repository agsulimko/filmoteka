// ==========================================

import React, { useState, useEffect } from "react";
import { getAllMoviesTrending } from "../api/api";
import { Link, useLocation } from "react-router-dom";
import css from "./Home.module.css";
import { Select, BackToTopButton } from "./Home.styled";

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "en-US"
  );
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const fetchMovies = async (page, language) => {
    setLoading(true);
    try {
      const { results, total_pages } = await getAllMoviesTrending(
        page,
        language
      );
      if (page === 1) {
        setMovies(results); // Если страница первая, устанавливаем новый список фильмов
      } else {
        setMovies((prevMovies) => [...prevMovies, ...results]); // Иначе добавляем к текущему списку
      }
      setHasMore(page < total_pages); // Устанавливаем hasMore в зависимости от текущей и общего числа страниц
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
    setCurrentPage(1); // Сбрасываем текущую страницу при изменении языка
    setMovies([]); // Очищаем список фильмов при изменении языка
  }, [selectedLanguage]);

  useEffect(() => {
    fetchMovies(currentPage, selectedLanguage); // Вызываем загрузку фильмов при изменении currentPage или selectedLanguage
  }, [currentPage, selectedLanguage]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100 &&
        !loading &&
        hasMore
      ) {
        setCurrentPage((prevPage) => prevPage + 1); // Пагинация при скролле вниз
      }
      if (window.scrollY > 300 && movies.length > 40) {
        setShowBackToTop(true); // Показать кнопку "Наверх" при прокрутке вниз
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore, movies.length]);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Плавный скролл наверх
  };

  return (
    <div className={css.homeMovies}>
      <div>
        <Select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className={css.selectedLanguage}
        >
          <option value="en-US">En</option>
          <option value="de-DE">De</option>
          <option value="uk-UA">Uk</option>
          <option value="ru-RU">Ru</option>
          <option value="ar-SA">العربية</option>
        </Select>
      </div>
      <h1>Trending today</h1>

      <div className={css.home}>
        {movies.map((mov, index) => (
          <Link
            key={`${mov.id}-${index}`}
            to={`${mov.id}`}
            state={{ from: location }}
          >
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
    </div>
  );
};

export default Home;

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
