import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Layout from "./Components/Layout";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Info = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { delay: 0.1, ...transition },
      });
    }
    if (!inView) {
      animation.start({
        y: 50,
        opacity: 1,
      });
    }
    console.log("use effect hook, inView = ", inView);
  });

  return (
    <Layout>
      <motion.div
        className="assistant"
        initial={{ opacity: 0, x: 40 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { delay: 1, ...transition },
        }}
      >
        <a href="/" className="text-social assistant-text">
          go back
        </a>
      </motion.div>
      <div className="info">
        <motion.div
          className="info-text text-big"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, ...transition },
          }}
        >
          Hi, I'm Alexandre! I appreciate that you want to know a little more
          about my work.
          <br />
          The portfolio presents my 4 best projects and also experiences, which
          reflect my skills and make you get to know me a little better.
          <br />I hope you like it, <span className="blink_me">l</span>
        </motion.div>
        <motion.div ref={ref} className="social" animate={animation}>
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
        </motion.div>
      </div>
    </Layout>
  );
};

export default Info;
