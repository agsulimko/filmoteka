// App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./Layout";
import { Loader } from "./Loader/Loader";
import { selectLoading } from "../redux/selectors";

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const Actors = lazy(() => import("../pages/Actors"));
const MoviesDetails = lazy(() => import("./MoviesDetails"));
const Trailer = lazy(() => import("./Trailer"));
const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"));
const HomePage = lazy(() => import("./HomePage"));

export const App = () => {
  const loading = useSelector(selectLoading);

  return (
    <Suspense fallback={<Loader />}>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="actors" element={<Actors />} />
          <Route path=":movieId" element={<MoviesDetails />}>
            <Route path="trailer" element={<Trailer />} />
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="homepage" element={<HomePage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
