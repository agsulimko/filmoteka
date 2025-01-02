//   // Вызовем функцию getPopularActors, передаем параметры page и language
//   const fetchPopularActors = async () => {
//     const actors = await getPopularActors(1, "en-US", 20); // Пример: 1 страница, 'en-US', 20 актеров
//     console.log("getPopularActors =", actors); // Выводим результат в консоль
//   };

//   fetchActors(); // Выполняем асинхронный запрос
// }, []);import React, { useEffect } from "react";

//////////////////////////////

import React, { useEffect } from "react";
import css from "./Actors.module.css";
import { fetchPopularActors } from "../redux/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { selectPopularActors, selectLoading } from "../redux/selectors";

const PopularActors = () => {
  const dispatch = useDispatch();
  const { selectedLanguage } = useOutletContext();
  const actors = useSelector(selectPopularActors) || [];
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchPopularActors({ page: 1, language: selectedLanguage }));
  }, [dispatch, selectedLanguage]);

  if (isLoading) return <div>Загрузка...</div>;
  if (!actors.length) return <div>Нет данных</div>;

  return (
    <div className={css.main}>
      <h1>Популярные актеры</h1>
      <ul className={css.list}>
        {actors.map((actor) => (
          <li key={actor.id}>
            {actor.name}
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularActors;

// import css from "./Actors.module.css";

// import { fetchPopularActors } from "../redux/thunks";
// import { useDispatch, useSelector } from "react-redux";
// import { useOutletContext } from "react-router-dom";
// import { selectPopularActors } from "redux/selectors";
// const PopularActors = () => {
//   const dispatch = useDispatch();
//   const { selectedLanguage } = useOutletContext();
//   const actors = useSelector(selectPopularActors) || [];
//   useEffect(() => {
//     dispatch(
//       fetchPopularActors({
//         page: 1,
//         language: selectedLanguage,
//       })
//     );
//   }, [dispatch, selectedLanguage]);

//   return (
//     <div className={css.main}>
//       <h1>Популярные актеры</h1>
//       <ul>
//         {actors.map((actor) => (
//           <li key={actor.id}>
//             {actor.name}
//             <img
//               src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
//               alt={actor.name}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default PopularActors;

// import React, { useEffect, useState } from "react";
// import css from "./Actors.module.css";
// import { getPopularActors, getActorMovies } from "../api";

// const Actors = () => {
//   const [actors, setActors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchActors = async () => {
//       try {
//         const popularActors = await getPopularActors(1, "en-US");
//         const sortedActors = popularActors.sort(
//           (a, b) => a.popularity - b.popularity
//         );
//         setActors(sortedActors);
//       } catch (error) {
//         setError("Failed to fetch actors data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchActors();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className={css.container}>
//       <h1 className={css.title}>Actors</h1>
//       <ul className={css.list}>
//         {actors.map((actor) => (
//           <li key={actor.id} className={css.item}>
//             <img
//               src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
//               alt={actor.name}
//               className={css.image}
//             />
//             <h2 className={css.name}>{actor.name}</h2>
//             <p className={css.rating}>Rating: {actor.popularity.toFixed(1)}</p>
//             <h3 className={css.subtitle}>Movies:</h3>
//             <MoviesList actorId={actor.id} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const MoviesList = ({ actorId }) => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const actorMovies = await getActorMovies(actorId, "en-US");
//         setMovies(actorMovies);
//       } catch (error) {
//         console.error("Failed to fetch movies", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMovies();
//   }, [actorId]);

//   if (loading) return <p>Loading movies...</p>;

//   return (
//     <ul className={css.moviesList}>
//       {movies.map((movie) => (
//         <li key={movie.id}>{movie.title}</li>
//       ))}
//     </ul>
//   );
// };

// export default Actors;
