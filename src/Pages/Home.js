import React from "react";
import Layout from "./Components/Layout";
import CardProject from "./Components/CardProject";
import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildren: 10,
      staggerChildren: 0.1,
    },
  },
};

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

function Home() {
  return (
    <Layout>
      <motion.div
        className="home"
        variants={banner}
        initial={{ opacity: 0, y: 0 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.4, ...transition },
        }}
      >
        <div className="container">
          <div className=" section section-one">
            <CardProject
              imageUrl="img/queima.webp"
              date="2020"
              title="queima das fitas 2021"
              area="PROFESSIONAL"
              width="width/"
              team="Ana Catarina Ricardo Sacadura"
            />
          </div>
          <div className=" section section-two">
            <CardProject
              imageUrl="img/alta_baixa.webp"
              date="2021"
              title="alta & baixa"
              area="ACADEMIC"
              width="width/"
              team="Alexandre Lucas Carlota Silva"
            />
          </div>
          <div className=" section section-three">
            <CardProject
              imageUrl="img/porto_bc.webp"
              date="2020"
              title="porto.bc"
              area="PROFESSIONAL"
              width=""
              team=""
            />
          </div>
          <div className=" section section-four">
            <CardProject
              imageUrl="img/skillX.webp"
              date="2021"
              title="skillX"
              area="SUMMER INTERN"
              width=""
              team=""
            />
          </div>
          <div className=" section section-five">
            <CardProject
              imageUrl="img/culture.webp"
              date="2021"
              title="cultureInn"
              area="ACADEMIC"
              width="width/"
              team="Carlota Silva Ricardo Sacadura"
            />
          </div>
          <div className=" section section-six">
            <CardProject
              imageUrl="img/mm.webp"
              date="2021"
              title="volumetric world"
              area="ACADEMIC"
              width=""
              team=""
            />
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}

export default Home;
