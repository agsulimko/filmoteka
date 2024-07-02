// import Container from "@mui/material/Container";
import React, { Suspense } from "react";

// import Home from "path/to/pages/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { lazy } from "react";
import Loader from "./Loader/Loader";
import { ThemeProvider } from "@mui/material/styles"; // Import ThemeProvider
import { theme } from "../styles/theme-file"; // Import your theme object
import { useSelector } from "react-redux";
import { selectLoading } from "../redux/selectors";
const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MoviesDetails = lazy(() => import("./MoviesDetails"));

const Trailer = lazy(() => import("./Trailer"));

const Cast = lazy(() => import("./Cast"));

const Reviews = lazy(() => import("./Reviews"));
const HomePage = lazy(() => import("./HomePage"));

export const App = () => {
  const loading = useSelector(selectLoading);
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>{Loader()}</div>}>
        {loading && <div>{Loader()}</div>}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="movies" element={<Movies />} />
            <Route path=":movieId" element={<MoviesDetails />}>
              <Route path="trailer" element={<Trailer />} />
              <Route path="cast" element={<Cast />} />

              <Route path="reviews" element={<Reviews />} />
              <Route path="homepage" element={<HomePage />} />
            </Route>

            {/* <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />

            <Route path="reviews" element={<Reviews />} />
          </Route> */}
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};
