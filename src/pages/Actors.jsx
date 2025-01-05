//   // Вызовем функцию getPopularActors, передаем параметры page и language
//   const fetchPopularActors = async () => {
//     const actors = await getPopularActors(1, "en-US", 20); // Пример: 1 страница, 'en-US', 20 актеров
//     console.log("getPopularActors =", actors); // Выводим результат в консоль
//   };

//   fetchActors(); // Выполняем асинхронный запрос
// }, []);import React, { useEffect } from "react";

//////////////////////////////

// import React, { useEffect, useState } from "react";
// import css from "./Actors.module.css";
// import { fetchPopularActors } from "../redux/thunks";
// import { useDispatch, useSelector } from "react-redux";
// import { useOutletContext } from "react-router-dom";
// import {
//   selectPopularActors,
//   selectLoading,
//   selectTotalPages,
// } from "../redux/selectors";
// import Button from "@mui/material/Button";
// import { Loader } from "components/Loader/Loader";

// const PopularActors = () => {
//   const dispatch = useDispatch();
//   const { selectedLanguage } = useOutletContext();
//   const actors = useSelector(selectPopularActors) || [];
//   const isLoading = useSelector(selectLoading);
//   const totalPages = useSelector(selectTotalPages) || 1;

//   const [currentPage, setCurrentPage] = useState(1);

//   // Fetch actors when the component mounts or language/page changes
//   useEffect(() => {
//     dispatch(
//       fetchPopularActors({ page: currentPage, language: selectedLanguage })
//     );
//   }, [dispatch, selectedLanguage, currentPage]);

//   const handlePageChange = (newPage) => {
//     if (newPage > 0 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

//   return (
//     <div className={css.main}>
//       <h1>Популярные актеры</h1>
//       {isLoading && <Loader />}
//       {!isLoading && actors.length === 0 && <div>Нет данных</div>}
//       <ul className={css.list}>
//         {actors.map((actor) => (
//           <li key={actor.id}>
//             <p>{actor.name}</p>
//             <img
//               src={
//                 actor.profile_path
//                   ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
//                   : "/placeholder.png"
//               }
//               alt={actor.name}
//             />
//           </li>
//         ))}
//       </ul>

//       <div className={css.pagination}>
//         <Button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </Button>
//         <span>{`Page ${currentPage} of ${totalPages}`}</span>
//         <Button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default PopularActors;

// /////////////

import React, { useEffect } from "react";
import css from "./Actors.module.css";
import { fetchPopularActors } from "../redux/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useOutletContext } from "react-router-dom";
import {
  selectPopularActors,
  selectLoading,
  selectTotalPages,
} from "../redux/selectors";
import { Loader } from "components/Loader/Loader";
import Pagination from "components/Pagination/Pagination";

const PopularActors = () => {
  const dispatch = useDispatch();
  const { selectedLanguage } = useOutletContext();
  const actors = useSelector(selectPopularActors) || [];
  const isLoading = useSelector(selectLoading);
  const totalPages = useSelector(selectTotalPages) || 1;

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  // Fetch actors when the component mounts or language/page changes
  useEffect(() => {
    dispatch(
      fetchPopularActors({ page: currentPage, language: selectedLanguage })
    );
  }, [dispatch, selectedLanguage, currentPage]);

  return (
    <div className={css.main}>
      <h1>Популярные актеры</h1>
      {isLoading && <Loader />}
      {!isLoading && actors.length === 0 && <div>Нет данных</div>}
      <ul className={css.list}>
        {actors.map((actor) => (
          <li key={actor.id}>
            <p>{actor.name}</p>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : "/placeholder.png"
              }
              alt={actor.name}
            />
          </li>
        ))}
      </ul>
      {!isLoading && totalPages > 1 && (
        <Pagination
          pageCount={totalPages}
          setSearchParams={setSearchParams}
          params={Object.fromEntries(searchParams.entries())}
          currentPage={currentPage - 1} // ReactPaginate expects 0-based index
        />
      )}
    </div>
  );
};

export default PopularActors;
