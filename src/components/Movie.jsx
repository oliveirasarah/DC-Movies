// eslint-disable-next-line react/prop-types
export default function Movie({ name, poster, releaseDate, continuity }) {
  return (
    <div className="movie-box">
      <img src={poster} className="cover" />
      <h2 className="title">{name}</h2>
      <p className="release">{releaseDate}</p>
      <p className="continuity">{continuity}</p>
    </div>
  )
}
