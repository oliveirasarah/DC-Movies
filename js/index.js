import movies from "./config.js";

const dcMovies = document.querySelector(".dcMovies");

function displayMovies(array) {
  dcMovies.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    let movie = array[i];

    // Creating the elements
    let movie_element = document.createElement("div");
    let title = document.createElement("h2");
    let cover = document.createElement("div");
    let release = document.createElement("div");
    let continuity = document.createElement("div");

    // Giving classes to each one of them for css
    movie_element.classList.add("list-movie");
    title.classList.add("movie-title");
    cover.classList.add("movie-cover");
    release.classList.add("movie-release");
    continuity.classList.add("movie-continuity");

    // Getting the data from the API and injecting it in the elements
    title.innerText = movie.name;
    cover.innerHTML = `<img src=${movie.poster}>`;
    release.innerText = movie.releaseDate;
    continuity.innerText = movie.continuity;

    // Appending each element to their significant parent
    movie_element.appendChild(title);
    movie_element.appendChild(cover);
    movie_element.appendChild(release);
    movie_element.appendChild(continuity);
    dcMovies.appendChild(movie_element);
  }
}

displayMovies(movies);

const standaloneFilter = movies.filter(
  (item) => item.continuity == "Standalone"
);

const dcamuFilter = movies.filter((item) => item.continuity == "DCAMU");

const dcoamuFilter = movies.filter((item) => item.continuity == "DCOAMU");

const othersFilter = movies.filter(
  (item) =>
    item.continuity !== "DCOAMU" &&
    item.continuity !== "DCAMU" &&
    item.continuity !== "Standalone"
);

const filters = document.querySelectorAll(".filter");

filters.forEach((filter) => {
  filter.addEventListener("click", (e) => {
    const id = e.target.id;

    switch (id) {
      case "all":
        displayMovies(movies);
        break;
      case "standalone":
        displayMovies(standaloneFilter);
        break;
      case "dcamu":
        displayMovies(dcamuFilter);
        break;
      case "dcoamu":
        displayMovies(dcoamuFilter);
        break;
      case "others":
        displayMovies(othersFilter);
        break;
    }
  });
});

const header = document.querySelector("header");
const scrollBack = document.querySelector(".scroll-back");

scrollBack.onclick = () => {
  header.scrollIntoView();
};
