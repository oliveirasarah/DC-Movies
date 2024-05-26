import styled from "styled-components"

const Paragraph = styled.p`
  color: #ddd;
  font-size: 1.25rem;
  padding: 2rem;
  text-align: center;
  font-weight: 500;
`

function NoMovies() {
  return <Paragraph>There are no watched movies in this category</Paragraph>
}

export default NoMovies
