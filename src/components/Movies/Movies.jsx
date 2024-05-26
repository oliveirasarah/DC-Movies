import styled from "styled-components"

const Movies = styled.section`
  margin-top: 4rem;
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 50px;
  align-items: center;

  @media (width > 773px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (width > 1024px) {
    grid-template-columns: repeat(3, 1fr);

    button {
      padding: 2rem;
      margin: 0.5rem 0.2rem;
    }
  }

  @media (width > 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (width > 1536px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (width > 2000px) {
    grid-template-columns: repeat(6, 1fr);
  }
`

export default Movies
