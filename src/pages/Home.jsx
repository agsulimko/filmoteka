// import React, { useState, useEffect } from "react";
// import { getAllMoviesTrending } from "../api/api";
// import { Link, useLocation } from "react-router-dom";
// import css from "./Home.module.css";
// // import toggleTheme from "script";

// const Home = () => {
//   const location = useLocation();
//   const [movies, setMovies] = useState([]);

//   const fetchMovies = async () => {
//     try {
//       const { results } = await getAllMoviesTrending();

//       setMovies((prevMovies) => [...results]);
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   useEffect(() => {
//     fetchMovies();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div className={css.homeMovies}>
//       {/* <label id="switch" class="switch">
//             <input type="checkbox" onchange={toggleTheme()} id="slider"/>
//             <span class="slider round"></span>
//         </label> */}
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
//                 {/* {mov.title} */}
//                 {`${mov.title} (${mov.release_date.slice(0, 4)})`}
//               </div>
//             </Link>
//           );
//         })}
//       </div>
//       <script src="script.js"></script>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import { getAllMoviesTrending } from "../api/api";
import { Link, useLocation } from "react-router-dom";
import css from "./Home.module.css";

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = async (page) => {
    try {
      const { results, total_pages } = await getAllMoviesTrending(page);
      setMovies(results);
      setTotalPages(total_pages);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className={css.homeMovies}>
      <h1>Trending today</h1>

      <div className={css.home}>
        {movies.map((mov, index) => {
          return (
            <Link key={index} to={`${mov.id}`} state={{ from: location }}>
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
                {`${mov.title} (${mov.release_date.slice(0, 4)})`}
              </div>
            </Link>
          );
        })}
      </div>

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
    </div>
  );
};

export default Home;
