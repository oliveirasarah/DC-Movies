/* eslint-disable react/prop-types */
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const StyledBtn = styled.button`
  border: none;
  justify-content: center;
  font-size: 1rem;
  color: var(--watched-100);
  padding: 1rem 1.5rem;

  &.active {
    background-color: var(--watched-100);
    color: var(--dark);
  }

  &:hover {
    border: solid 2px var(--watched-100);
  }

  .fa-square-check {
    margin-right: 0.5rem;
  }
`

function WatchedBtn({ onClick, watchedFilter }) {
  return (
    <StyledBtn
      onClick={onClick}
      className={`btn ${watchedFilter ? "active" : null}`}
    >
      <FontAwesomeIcon icon={faSquareCheck} size="xl" />
      <span>Watched</span>
    </StyledBtn>
  )
}

export default WatchedBtn
