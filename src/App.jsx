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
  const [selectedOption, setSelectedOption] = useState("all");

  function handleClick(clickedOption, array) {
    setSelectedOption(clickedOption);
    let selectedArray = array.map((el) => <Movie {...el} />);
    setMovies(selectedArray);
  }

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
            isSelected={selectedOption === "all"}
            title="All"
            count={MOVIES.length}
            onClick={() => handleClick("all", MOVIES)}
          />
          <Filter
            isSelected={selectedOption === "standalone"}
            title="Standalone"
            count={standaloneFilter.length}
            onClick={() => handleClick("standalone", standaloneFilter)}
          />
          <Filter
            isSelected={selectedOption === "dcamu"}
            title="DCAMU"
            count={dcamuFilter.length}
            onClick={() => handleClick("dcamu", dcamuFilter)}
          />
          <Filter
            isSelected={selectedOption === "tv"}
            title="Tomorrowverse"
            count={tvFilter.length}
            onClick={() => handleClick("tv", tvFilter)}
          />
          <Filter
            isSelected={selectedOption === "others"}
            title="Others"
            count={othersFilter.length}
            onClick={() => handleClick("others", othersFilter)}
          />
        </section>
        <section className="dc-movies">{movies}</section>
      </main>
    </>
  );
}
