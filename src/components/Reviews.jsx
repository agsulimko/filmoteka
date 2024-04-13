import React, { useState, useEffect } from "react";
import { getReviews } from "../api/api";
import { useParams } from "react-router-dom";
import css from "./Reviews.module.css";
const Reviews = () => {
  const { movieId } = useParams();
  const [selectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "en-US"
  );
  const [reviewsMovies, setReviews] = useState([]);

  const fetchReviews = async (selectedLanguage) => {
    try {
      const { results } = await getReviews(movieId, selectedLanguage);

      setReviews((prevReviews) => [...results]);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    // localStorage.setItem("selectedLanguage", selectedLanguage);
    fetchReviews(selectedLanguage);
    // Функция для обработки события изменения в локальном хранилище

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLanguage]);

  if (reviewsMovies.length) {
    return (
      <div className={css.container}>
        {reviewsMovies.map((reviewsMovie, index) => {
          return (
            <div key={index}>
              <p>{`Author: ${reviewsMovie.author}.`}</p>
              <p>{reviewsMovie.content}</p>
            </div>
          );
        })}
      </div>
    );
  } else
    return (
      <div>
        <p className={css.ReviewsNot}>
          We don't have any reviews for this movie.
        </p>
      </div>
    );
};
export default Reviews;
