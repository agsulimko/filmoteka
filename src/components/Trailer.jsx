import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import css from "./Trailer.module.css";
const Trailer = () => {
  const { movieId } = useParams();
  const [videos, setVideos] = useState([]);
  const [videoKey, setVideoKey] = useState(null);
  //   const [videoId, setVideoId] = useState(null);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=0649efc971b913d6bfebf656f94b5c92`
        );
        const { results } = await response.json();
        console.log(results);
        if (results.length > 0) {
          //   setVideoId(results[0].key);

          setVideos(results);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [movieId]);

  const hasOfficialOrTrailer = (name) => {
    return (
      name.includes("Official") ||
      name.includes("Trailer") ||
      name.includes("trailer") ||
      name.includes("official")
    );
  };

  const playVideo = (key) => {
    setVideoKey(key);
  };

  return (
    <>
      <div>
        <div>
          {/* <div>Trailer:</div> */}
          {videos.map((video) => (
            <div key={video.key}>
              {/* {video.name === trailerType && ( */}
              {hasOfficialOrTrailer(video.name) && (
                <>
                  <h5>
                    {video.name} (
                    {new Date(video.published_at).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                    )
                  </h5>
                  <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${video.key}`}
                    controls
                    // width="100%"
                    min-width="310px"
                    // height="400px"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4> More trailers:</h4>

        {/* {videos.map((video) => (
          <div key={video.key}>
            {" "}
            {!hasOfficialOrTrailer(video.name) && <h4> More trailers:</h4>}
            {hasOfficialOrTrailer(video.name) && (
              <h4> We don't have any more trailers for this movie.</h4>
            )}
          </div>
        ))} */}

        <div className={css.DivMoreTrailes}>
          {videos.map((video) => (
            <div key={video.key}>
              {!hasOfficialOrTrailer(video.name) && (
                <div>
                  <div className={css.DivButtonTrailes}>
                    <button onClick={() => playVideo(video.key)}>
                      Play Video
                    </button>
                    <h5>
                      {video.name} (
                      {new Date(video.published_at).toLocaleDateString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                      )
                    </h5>
                  </div>
                  {videoKey === video.key && (
                    <ReactPlayer
                      url={`https://www.youtube.com/watch?v=${video.key}`}
                      controls
                      width="100%"
                      height="400px"
                    />
                  )}
                </div>
              )}
            </div>
          ))}
          {videos.lengt && (
            <h4> We don't have any more trailers for this movie.</h4>
          )}
        </div>

        {/* <div>
          {videos.map((video) => (
            <div key={video.key}>
              {videos.length === 0 && (
                <p className={css.MoreTrailersNot}>
                  We don't have any more trailers for this movie.
                </p>
              )}
            </div>
          ))}
        </div> */}
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
