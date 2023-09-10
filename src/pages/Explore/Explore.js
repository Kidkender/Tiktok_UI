import { faDog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Explore() {
  return (
    <>
      <h1>Explore Page</h1>{" "}
      <h2 style={{ marginLeft: "30px", color: "red" }}>
        Hi i'm Duck <br />
        <FontAwesomeIcon icon={faDog} />
      </h2>
    </>
  );
}

export default Explore;
