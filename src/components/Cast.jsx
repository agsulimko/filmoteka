import React, { useState, useEffect } from "react";
import { getCast } from "../api/api";
import { useParams, useOutletContext } from "react-router-dom";
import css from "./Cast.module.css";
import defaultImage from "../helper/imgonline-com-ua-Resize-uoGGMedYun.jpg";

// );

const Cast = () => {
  const { movieId } = useParams();
  //   console.log("moveId=", moveId);
  const [castMovies, setCast] = useState([]);
  // const [selectedLanguage] = useState(
  //   localStorage.getItem("selectedLanguage") || "en-US"
  // );

  const { selectedLanguage } = useOutletContext();
  const fetchCast = async (selectedLanguage) => {
    try {
      const { cast } = await getCast(movieId, selectedLanguage);
      // console.log(cast);
      setCast((prevCast) => [...cast]);
      // console.log(castMovies);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    // localStorage.setItem("selectedLanguage", selectedLanguage);
    fetchCast(selectedLanguage);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLanguage]);

  return (
    <div className={css.divCast}>
      {/* <div>++++Cast++++</div> */}
      {castMovies.map((castMovie, index) => {
        if (castMovie) {
          return (
            <div className={css.cardCast} key={index}>
              <img
                className="center-block img-responsive"
                width="150px"
                // height="320px"
                src={
                  castMovie.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${castMovie.profile_path}`
                    : defaultImage
                }
                alt={castMovie.name}
              />
              <p className={css.text}>{castMovie.name}</p>
              <p className={css.text}>{`Character: ${castMovie.character}`}</p>
            </div>
          );
        }
        //   else {
        //   return (
        //     <div className={css.cardCast} key={index}>
        //       <img
        //         className="center-block img-responsive defaultImage"
        //         width="150px"
        //         height="225px"
        //         src={defaultImage}
        //         alt={castMovie.name}
        //       />
        //       <p className={css.text}>{castMovie.name}</p>
        //       <p className={css.text}>{`Character: ${castMovie.character}`}</p>
        //     </div>
        //   );
        // }
        return null;
      })}
    </div>
  );
};

export default Cast;

// profile_path
// name
// character
