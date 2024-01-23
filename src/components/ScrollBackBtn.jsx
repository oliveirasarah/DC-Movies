import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollBackBtn() {
  return (
    <button
      id="scroll-back"
      onClick={() => (document.documentElement.scrollTop = 0)}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}
