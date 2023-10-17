import "./Footer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer({ style }) {
  return (
    <footer style={style} data-testid="footer">
      <div id="footer">
        <div className="footer-subsection">
          <a
            href="https://www.linkedin.com/in/neimayeganeh/"
            data-testid="linkedin-link"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            &nbsp;&nbsp;@neimayeganeh
          </a>
        </div>

        <div className="footer-subsection">
          <a href="https://github.com/Neima-Yeganeh" data-testid="github-link">
            <FontAwesomeIcon icon={faGithub} />
            &nbsp;&nbsp;@Neima-Yeganeh
          </a>
        </div>

        <div className="footer-subsection">© 2023 Neima Yeganeh</div>
      </div>
    </footer>
  );
}

export default Footer;
