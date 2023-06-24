async function getData() {
  const result = await fetch("./api/data.json");
  const data = await result.json();
  return data.movies;
}

const movies = await getData();

export default movies;
