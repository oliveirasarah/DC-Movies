import movies from "./config.js";

const dcMovies = document.querySelector(".dc-movies");

function displayMovies(array) {
  dcMovies.innerHTML = "";

  array.map((el) => {
    // Creating the elements
    let movieElement = document.createElement("div");
    let title = document.createElement("h2");
    let cover = document.createElement("div");
    let release = document.createElement("div");
    let continuity = document.createElement("div");

    // Giving classes to each one of them for css
    movieElement.classList.add("movie");
    title.classList.add("movie__title");
    cover.classList.add("movie__cover");
    release.classList.add("movie__release");
    continuity.classList.add("movie__continuity");

    // Getting the data from the API and injecting it in the elements
    title.innerText = el.name;
    cover.innerHTML = `<img src=${el.poster}>`;
    release.innerText = el.releaseDate;
    continuity.innerText = el.continuity;

    // Appending each element to their significant parent
    movieElement.appendChild(title);
    movieElement.appendChild(cover);
    movieElement.appendChild(release);
    movieElement.appendChild(continuity);
    dcMovies.appendChild(movieElement);
  });
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

const scrollBack = document.querySelector("#scroll-back");

scrollBack.onclick = () => document.querySelector("header").scrollIntoView();
