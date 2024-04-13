import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import css from "./Trailer.module.css";
import styled from "styled-components";
import { getVideos } from "api/api";
const StyledReactPlayer = styled(ReactPlayer)`
  margin: 0 auto 10px auto;

  max-width: 100%;

  height: auto;
`;
const Trailer = () => {
  const { movieId } = useParams();
  const [videos, setVideos] = useState([]);
  const [videoKey, setVideoKey] = useState(null);
  const [selectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "en-US"
  );
  //   const [videoId, setVideoId] = useState(null);
  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
    const fetchVideos = async (language) => {
      try {
        // const response = await fetch(
        //   `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=0649efc971b913d6bfebf656f94b5c92`
        // );
        const { results } = await getVideos(movieId, language);
        // console.log(results);
        if (results.length > 0) {
          //   setVideoId(results[0].key);

          setVideos(results);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos(selectedLanguage);
    // eslint-disable-next-line
  }, [movieId, selectedLanguage]);

  const hasOfficialOrTrailer = (name) => {
    return (
      name.includes("Official") ||
      name.includes("Trailer") ||
      name.includes("trailer") ||
      name.includes("official") ||
      name.includes("трейлер") ||
      name.includes("Трейлер")
    );
  };

  const playVideo = (key) => {
    setVideoKey(key);
  };

  return (
    <>
      <div>
        {videos.map((video) => (
          <div key={video.key} className={css.DivPlayer1}>
            {hasOfficialOrTrailer(video.name) && (
              <div className={css.DivPlayer}>
                <h5 className={css.h5}>
                  {video.name} (
                  {new Date(video.published_at).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                  )
                </h5>
                <StyledReactPlayer
                  url={`https://www.youtube.com/watch?v=${video.key}`}
                  controls
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={css.DivMoreTrailes}>
        {videos.map((video) => (
          <div key={video.key}>
            {!hasOfficialOrTrailer(video.name) && (
              <div className={css.DivPlayerName}>
                <div className={css.DivButtonTrailes}>
                  <button
                    className={css.ButtonTrailes}
                    onClick={() => playVideo(video.key)}
                  >
                    Play Video
                  </button>
                  <h5 className={css.h5_Title}>
                    {video.name} (
                    {new Date(video.published_at).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                    )
                  </h5>
                </div>
                {videoKey === video.key && (
                  <StyledReactPlayer
                    className={css.Player}
                    url={`https://www.youtube.com/watch?v=${video.key}`}
                    controls
                  />
                )}
              </div>
            )}
          </div>
        ))}
        {videos.length === 0 && (
          <h4> We don't have any more trailers for this movie.</h4>
        )}
      </div>
    </>
  );
};

export default Trailer;

/* {videoId && (
        <iframe
          title="Trailer"
          width="310px"
          //   width="100%"
          //   height="400px"
          src={`https://www.youtube.com/embed/${videoId}`}
          //   frameborder="0"
          //   allowfullscreen
        ></iframe>
      )} */
