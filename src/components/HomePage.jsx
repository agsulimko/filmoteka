// import { getTrailer } from "../api/api";
import { getMoviesTrending } from "api/api";
import React, { useEffect, useState } from "react";
// import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import css from "./HomePage.modules.css";

const HomePage = () => {
  const { movieId } = useParams();
  console.log("movieId=", movieId);
  const [trailerMovies, setTrailer] = useState([]);

  const fetchTrailer = async () => {
    try {
      const { homepage } = await getMoviesTrending(movieId);
      console.log("homepage=", homepage);
      setTrailer(homepage);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchTrailer();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* Проверяем, что есть ссылка на трейлер */}
      {trailerMovies ? (
        <a
          href={trailerMovies}
          target="_blank"
          rel="noopener noreferrer"
          color="#cb0f53"
          // text-decoration="underline"
          margin="0 100px"
        >
          {trailerMovies}
        </a>
      ) : (
        <p className={css.HomePageNot}>
          We don't have any home page for this movie.
        </p>
      )}
    </div>
  );
};
export default HomePage;
