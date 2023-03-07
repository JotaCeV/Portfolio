import React, { useEffect, useState } from "react";
import "./header.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import ProfilePic from "../../assets/profile-pic.jpeg";

function Header() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 1500);
  }, []);

  const redirectAnotherWindow = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className="header-container">
        {showContent ? (
          <div className="info-container">
            <div className="text-container">
              <h2>Soy</h2>
              <h1>Juan Cruz Vetromile</h1>
              <h3>Desarrolador Web Full-Stack</h3>
              <div className="button-container">
                <button
                  type="button"
                  id="btn-link"
                  onClick={() =>
                    redirectAnotherWindow("https://github.com/JotaCeV")
                  }
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
            </div>

            <img src={ProfilePic} alt="profile-pic" id="profile-img" />
          </div>
        ) : (
          <h1 id="welcome-msg">Bienvenidos!</h1>
        )}
      </div>
    </>
  );
}

export default Header;
