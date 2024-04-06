import { getTrailer } from "../api/api";
import React, { useEffect, useState } from "react";
const { useParams } = require("react-router-dom");

const Trailer =()=>{
    const {movieId} =useParams();
    const [trailerMovies, setTrailer]=useState([]);
console.log("trailerMovies=>",trailerMovies);
    const fetchTrailer = async () =>{
try {
    const{ trailer} =await getTrailer(movieId);
    setTrailer((prevTrailer) => [...trailer])
    console.log("trailer=>",trailer);
} catch (error) {
    console.log(error.message);
}
    };

    useEffect(() => {
        fetchTrailer();
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      return(
        <div>trailerMovies

        </div>
      )

};
export default Trailer;