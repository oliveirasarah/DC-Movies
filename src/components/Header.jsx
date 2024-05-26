import styled from "styled-components"

const StyledHeader = styled.header`
  background-color: rgba(0, 0, 0, 0.4);
  background-image: url("https://cdn.mos.cms.futurecdn.net/gWtokCsGcHFKx6gLEGwdd7-1200-80.jpg");
  background-position: center;
  padding: 5rem;
  background-size: cover;
  background-blend-mode: darken;

  .page-title {
    font-weight: 400;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  }
`

const Credit = styled.p`
  display: flex;
  padding: 5px;
  font-size: 0.8rem;
`

function Header() {
  return (
    <>
      <StyledHeader>
        <h1 className="page-title">DC Universe Animated Original Movies</h1>
      </StyledHeader>
      <Credit className="credit">Image credit: DC</Credit>
    </>
  )
}

export default Header
