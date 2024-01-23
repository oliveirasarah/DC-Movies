export default function Movie({ name, poster, releaseDate, continuity }) {
  return (
    <div className="movie">
      <h2 className="movie__title">{name}</h2>
      <img src={poster} className="movie__cover" />
      <p className="movie__release">{releaseDate}</p>
      <p className="movie__continuity">{continuity}</p>
    </div>
  );
}
