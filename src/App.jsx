import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Movie from "./components/Movie";
import ScrollBackBtn from "./components/ScrollBackBtn";
import data from "./data.json";

const MOVIES = data.movies;

const standaloneFilter = MOVIES.filter(
  ({ continuity }) => continuity == "Standalone"
);

const dcamuFilter = MOVIES.filter(({ continuity }) => continuity == "DCAMU");

const tvFilter = MOVIES.filter(
  ({ continuity }) => continuity == "Tomorrowverse"
);

const othersFilter = MOVIES.filter(
  ({ continuity }) =>
    continuity !== "Tomorrowverse" &&
    continuity !== "DCAMU" &&
    continuity !== "Standalone"
);

export default function App() {
  const [movies, setMovies] = useState(MOVIES.map((el) => <Movie {...el} />));
  const [showButton, setShowButton] = useState(false);
  const displayMovies = (array) => array.map((el) => <Movie {...el} />);

  useEffect(() => {
    function toggleButtonRendering() {
      document.documentElement.scrollTop > 100
        ? setShowButton(true)
        : setShowButton(false);
    }

    window.addEventListener("scroll", toggleButtonRendering);
  }, []);

  return (
    <>
      {showButton && <ScrollBackBtn />}
      <main>
        <section className="filters">
          <Filter
            title={`All (${MOVIES.length})`}
            onClick={() => setMovies(displayMovies(MOVIES))}
          />
          <Filter
            title={`Standalone (${standaloneFilter.length})`}
            onClick={() => setMovies(displayMovies(standaloneFilter))}
          />
          <Filter
            title={`DCAMU (${dcamuFilter.length})`}
            onClick={() => setMovies(displayMovies(dcamuFilter))}
          />
          <Filter
            title={`Tomorrowverse (${tvFilter.length})`}
            onClick={() => setMovies(displayMovies(tvFilter))}
          />
          <Filter
            title={`Others (${othersFilter.length})`}
            onClick={() => setMovies(displayMovies(othersFilter))}
          />
        </section>
        <section className="dc-movies">{movies}</section>
      </main>
    </>
  );
}
