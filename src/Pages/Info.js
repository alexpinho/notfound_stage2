import React from "react";
import Layout from "./Components/Layout";

const Info = () => {
  return (
    <Layout>
      <div className="assistant">
        <a href="/" className="text-social assistant-text">
          go back
        </a>
      </div>
      <div className="info">
        <div className="info-text text-big">
          Hi, I'm Alexandre! I appreciate that you want to know a little more
          about my work.
          <br />
          The portfolio presents my 4 best projects and also experiences, which
          reflect my skills and make you get to know me a little better.
          <br />I hope you like it, <span className="blink_me">l</span>
        </div>
        <div className="social">
          <ul className="social-area">
            <li className="social-area-elements">
              <a
                href="https://www.instagram.com/notf_found/"
                className="social-area-elements-text text-social"
                rel="noopener noreferrer"
                target="_blank"
              >
                instagram
              </a>
            </li>
            <li className="social-area-elements">
              <a
                href="https://github.com/alexpinho"
                className="social-area-elements-text text-social"
                rel="noopener noreferrer"
                target="_blank"
              >
                github
              </a>
            </li>
            <li className="social-area-elements">
              <a
                href="https://www.behance.net/alexandrepinho"
                className="social-area-elements-text text-social"
                rel="noopener noreferrer"
                target="_blank"
              >
                behance
              </a>
            </li>
            <li className="social-area-elements">
              <a
                href="https://www.linkedin.com/in/alexandre-pinho-2159711b1/"
                className="social-area-elements-text text-social"
                rel="noopener noreferrer"
                target="_blank"
              >
                linkedin
              </a>
            </li>
            <li className="social-area-elements">
              <a
                href="https://dribbble.com/not_found"
                className="social-area-elements-text text-social"
                rel="noopener noreferrer"
                target="_blank"
              >
                dribbble
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Info;
