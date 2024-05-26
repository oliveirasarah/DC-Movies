import movies from "../data/movies.json"

localStorage.movies = JSON.stringify(movies)
const MOVIES = JSON.parse(localStorage.movies)

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

export { MOVIES, standaloneFilter, dcamuFilter, tvFilter, othersFilter }
