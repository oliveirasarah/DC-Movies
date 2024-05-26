/* eslint-disable react/prop-types */
import styled from "styled-components"

const Button = styled.button`
  font-weight: 400;
  padding: 2rem 3rem;
  font-size: 1rem;

  &.selected {
    background-color: var(--accent);
    color: var(--dark);
  }
`

function Filter({ title, onClick, isSelected, count }) {
  return (
    <Button
      onClick={onClick}
      className={`btn btn--accent ${isSelected ? "selected" : null}`}
    >
      {title} ({count})
    </Button>
  )
}

export default Filter
