import React from "react";
import "./NavBar.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function NavBar({ ref1, ref2, ref3 }) {
  const redirectAnotherWindow = (link) => {
    window.open(link, "_blank");
  };

  const handleRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <nav className="nav-container">
      <ul>
        <li>
          <button onClick={() => handleRef(ref1)}>Sobre mi</button>
        </li>
        <li>
          <button onClick={() => handleRef(ref2)}>Skills</button>
        </li>
        <li>
          <button onClick={() => handleRef(ref3)}>Proyectos</button>
        </li>
        <li>
          <button>Contacto</button>
        </li>
      </ul>
      <div className="button-container">
        <button
          type="button"
          id="btn-link"
          onClick={() => redirectAnotherWindow("https://github.com/JotaCeV")}
        >
          <BsGithub />
        </button>

        <button
          type="button"
          id="btn-link"
          onClick={() =>
            redirectAnotherWindow(
              "https://www.linkedin.com/in/juan-cruz-vetromile-438367248/"
            )
          }
        >
          <BsLinkedin />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
