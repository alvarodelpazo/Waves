import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const Nav = ({
  libraryStatus,
  setLibraryStatus,
  lightingMode,
  setLightingMode,
}) => {
  return (
    <nav>
      <h1>Waves</h1>
      <div className="controls">
        <button onClick={() => setLibraryStatus(!libraryStatus)}>
          <p>Música</p>
          <FontAwesomeIcon className="icon" icon={faMusic} />
        </button>
        <button onClick={() => setLightingMode(!lightingMode)}>
          <p>Cambiar luz</p>
          <FontAwesomeIcon className="icon" icon={faLightbulb} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
