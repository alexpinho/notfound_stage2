import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion/dist/framer-motion";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const CardProject = ({ imageUrl, date, title, area, width, team }) => {
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
    <div className="card-project">
      <div className="card-project-item">
        <motion.div
          ref={ref}
          className="card-project-item-image"
          animate={animation}
        >
          <img src={imageUrl} className="card-project-item-image-img" alt="" />
        </motion.div>
        <div className="card-project-item-date text-detail">{date}</div>
        <motion.div
          ref={ref}
          className="card-project-item-title text-title"
          animate={animation}
        >
          {title}
        </motion.div>
        <div className="card-project-item-area text-detail">{area}</div>
        <div className="card-project-item-team text-normal">
          <span className="card-project-item-team-fix">{width}</span>
          <br />
          {team}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
