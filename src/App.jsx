import { useEffect, useState } from "react"
import Filter from "./components/Filter"
import Movie from "./components/Movie"
import ScrollBackBtn from "./components/ScrollBackBtn"
import MOVIES from "./movies.json"

const standaloneFilter = MOVIES.filter(
  ({ continuity }) => continuity == "Standalone"
)

const dcamuFilter = MOVIES.filter(({ continuity }) => continuity == "DCAMU")

const tvFilter = MOVIES.filter(
  ({ continuity }) => continuity == "Tomorrowverse"
)

const othersFilter = MOVIES.filter(
  ({ continuity }) =>
    continuity !== "Tomorrowverse" &&
    continuity !== "DCAMU" &&
    continuity !== "Standalone"
)

export default function App() {
  const [movies, setMovies] = useState(
    MOVIES.map((el) => <Movie key={crypto.randomUUID()} {...el} />)
  )
  const [showButton, setShowButton] = useState(false)
  const [selectedOption, setSelectedOption] = useState("all")

  function selectFilter(clickedOption, array) {
    setSelectedOption(clickedOption)
    let selectedArray = array.map((el) => <Movie {...el} />)
    setMovies(selectedArray)
  }

  useEffect(() => {
    function toggleButtonRendering() {
      document.documentElement.scrollTop > 100
        ? setShowButton(true)
        : setShowButton(false)
    }

    window.addEventListener("scroll", toggleButtonRendering)
  }, [])

  return (
    <>
      {showButton && <ScrollBackBtn />}
      <main>
        <section className="filters">
          <Filter
            isSelected={selectedOption === "all"}
            title="All"
            count={MOVIES.length}
            onClick={() => selectFilter("all", MOVIES)}
          />
          <Filter
            isSelected={selectedOption === "standalone"}
            title="Standalone"
            count={standaloneFilter.length}
            onClick={() => selectFilter("standalone", standaloneFilter)}
          />
          <Filter
            isSelected={selectedOption === "dcamu"}
            title="DCAMU"
            count={dcamuFilter.length}
            onClick={() => selectFilter("dcamu", dcamuFilter)}
          />
          <Filter
            isSelected={selectedOption === "tv"}
            title="Tomorrowverse"
            count={tvFilter.length}
            onClick={() => selectFilter("tv", tvFilter)}
          />
          <Filter
            isSelected={selectedOption === "others"}
            title="Others"
            count={othersFilter.length}
            onClick={() => selectFilter("others", othersFilter)}
          />
        </section>
        <section className="dc-movies">{movies}</section>
      </main>
    </>
  )
}
