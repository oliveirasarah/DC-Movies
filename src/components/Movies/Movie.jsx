/* eslint-disable react/prop-types */
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

import styled from "styled-components"

const StyledMovie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  &.watched img {
    border: 2px solid var(--watched-200);
    opacity: 0.6;
  }

  &.watched > .title,
  &.watched p {
    text-decoration: line-through;
    color: #b4b4b4;
  }

  &:hover img {
    opacity: 0.8;
  }

  > .title {
    max-width: 80%;
    font-weight: 400;
    margin-bottom: 0.6rem;
  }

  > .release {
    color: #c7c7c7;
  }

  > .continuity {
    font-style: italic;
    max-width: 80%;
  }

  > .continuity.hidden {
    display: none;
  }
`

const PosterBox = styled.span`
  position: relative;

  .icon {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    color: var(--watched-200);
  }
`

const Poster = styled.img`
  width: 200px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
  transition: ease-in-out 0.3s;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
`

function Movie({ name, poster, releaseDate, continuity, watched }) {
  const [isWatched, setIsWatched] = useState(watched)
  const toggleWatched = () => {
    setIsWatched((prevWatched) => !prevWatched)
  }

  return (
    <StyledMovie className={isWatched ? "watched" : ""} onClick={toggleWatched}>
      <PosterBox>
        <Poster className="poster" src={poster} />
        {isWatched && (
          <FontAwesomeIcon className="icon" icon={faSquareCheck} size="xl" />
        )}
      </PosterBox>
      <h2 className="title">{name}</h2>
      <p className="release">{releaseDate}</p>
      <p className="continuity">{continuity}</p>
    </StyledMovie>
  )
}

export default Movie
