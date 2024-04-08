// // import { getTrailer } from "../api/api";
// import { getVideos, getMoviesTrending } from "api/api";
// import React, { useEffect, useState } from "react";
// import ReactPlayer from "react-player";
// import { useParams } from "react-router-dom";
// // const { useParams } = require("react-router-dom");

// const Trailer = () => {
//   const { movieId } = useParams();
//   console.log("movieId=", movieId);
//   const [trailerMovies, setTrailer] = useState([]);
//   //   const [imagesMovies, setImages] = useState([]);
//   const [videos, setVideos] = useState([]);

//   const fetchTrailer = async () => {
//     try {
//       const { homepage } = await getMoviesTrending(movieId);
//       console.log("homepage=", homepage);
//       setTrailer(homepage);
//       //   setTrailer((prevTrailer) => [...trailer]);
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   const fetchVideos = async () => {
//     try {
//       const results = await getVideos(movieId);
//       console.log("Videos=", results[0]);
//       setVideos(results);
//       //   setTrailer((prevTrailer) => [...trailer]);
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   useEffect(() => {
//     fetchVideos();
//     fetchTrailer();

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   console.log("Videoss=", videos);
//   return (
//     <div>
//       <div> Watch Trailer:</div>
//       {/* Проверяем, что есть ссылка на трейлер */}
//       {trailerMovies && (
//         <a href={trailerMovies} target="_blank" rel="noopener noreferrer">
//           {/* Watch Trailer */}
//           {trailerMovies}
//         </a>
//       )}

//       {videos.map((video) => (
//         <div key={video.key}>
//           {/* <ReactPlayer
//             url={`https://www.youtube.com/watch?v=${video.key}`}
//             controls
//             width="100%"
//             height="400px"
//           /> */}
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Trailer;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import ReactPlayer from "react-player";

const Trailer = () => {
  const { movieId } = useParams();
  //   const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState(null);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=0649efc971b913d6bfebf656f94b5c92`
        );
        const data = await response.json();
        if (data.results.length > 0) {
          setVideoId(data.results[0].key);
        }
        // setVideos(data.results);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [movieId]);

  return (
    // <div>
    //   <div>Trailers:</div>
    //   {videos.length > 0 && (
    //     <div>
    //       <ReactPlayer
    //         url={`https://www.youtube.com/watch?v=${videos[0].key}`}
    //         controls
    //         width="100%"
    //         height="400px"
    //       />
    //     </div>
    //   )}
    // </div>

    <div>
      <div>Trailer:</div>
      {videoId && (
        <iframe
          title="Trailer"
          width="310px"
          //   width="100%"
          //   height="400px"
          src={`https://www.youtube.com/embed/${videoId}`}
          //   frameborder="0"
          //   allowfullscreen
        ></iframe>
      )}
    </div>
  );
};

export default Trailer;
