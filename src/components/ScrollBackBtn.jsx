import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const Button = styled.button`
  padding: 3px 5px;
  position: fixed;
  right: 10px;
  bottom: 20px;
  z-index: 99;

  .fa-arrow-up {
    padding: 0.4rem;
  }
`

function ScrollBackBtn() {
  const scrollTop = () => (document.documentElement.scrollTop = 0)

  return (
    <Button className="btn btn--accent" onClick={scrollTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </Button>
  )
}

export default ScrollBackBtn
