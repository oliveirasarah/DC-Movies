import { useEffect, useState } from "react"

import Filter from "./components/Filters/Filter"
import Movie from "./components/Movies/Movie"
import ScrollBackBtn from "./components/ScrollBackBtn"

import {
  MOVIES,
  standaloneFilter,
  dcamuFilter,
  tvFilter,
  othersFilter,
} from "./js/filters"

import Header from "./components/Header"
import Filters from "./components/Filters/Filters"
import Movies from "./components/Movies/Movies"
import WatchedBtn from "./components/WatchedBtn"
import NoWatchedMovies from "./components/Movies/NoWatchedMovies"

function App() {
  const [movies, setMovies] = useState(MOVIES)
  const [showButton, setShowButton] = useState(false)
  const [selectedOption, setSelectedOption] = useState("all")
  const [watchedFilter, setWatchedFilter] = useState(false)

  const applyWatchedFilter = (array) =>
    array.filter(({ watched }) => watched === true)

  const selectFilter = (clickedOption) => setSelectedOption(clickedOption)

  const filterWatchedMovies = () =>
    setWatchedFilter((prevWatchedFilter) => !prevWatchedFilter)

  useEffect(() => {
    const toggleButtonRendering = () =>
      document.documentElement.scrollTop > 100
        ? setShowButton(true)
        : setShowButton(false)

    window.addEventListener("scroll", toggleButtonRendering)
  }, [])

  useEffect(() => {
    let array

    switch (selectedOption) {
      case "all":
        array = MOVIES
        break
      case "standalone":
        array = standaloneFilter
        break
      case "dcamu":
        array = dcamuFilter
        break
      case "tv":
        array = tvFilter
        break
      case "others":
        array = othersFilter
        break
    }

    if (watchedFilter) {
      array = applyWatchedFilter(array)
    }

    setMovies(array)
  }, [watchedFilter, selectedOption])

  return (
    <>
      {showButton && <ScrollBackBtn />}

      <Header />

      <main>
        <Filters>
          <Filter
            isSelected={selectedOption === "all"}
            title="All"
            count={MOVIES.length}
            onClick={() => selectFilter("all")}
          />
          <Filter
            isSelected={selectedOption === "standalone"}
            title="Standalone"
            count={standaloneFilter.length}
            onClick={() => selectFilter("standalone")}
          />
          <Filter
            isSelected={selectedOption === "dcamu"}
            title="DCAMU"
            count={dcamuFilter.length}
            onClick={() => selectFilter("dcamu")}
          />
          <Filter
            isSelected={selectedOption === "tv"}
            title="Tomorrowverse"
            count={tvFilter.length}
            onClick={() => selectFilter("tv")}
          />
          <Filter
            isSelected={selectedOption === "others"}
            title="Others"
            count={othersFilter.length}
            onClick={() => selectFilter("others")}
          />
        </Filters>

        <WatchedBtn
          onClick={filterWatchedMovies}
          watchedFilter={watchedFilter}
        />

        {movies.length === 0 ? (
          <NoWatchedMovies />
        ) : (
          <Movies>
            {movies.map((movie) => (
              <Movie key={movie.id} {...movie} />
            ))}
          </Movies>
        )}
      </main>
    </>
  )
}

export default App
