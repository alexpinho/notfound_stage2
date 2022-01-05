import React from "react";
import Layout from "./Components/Layout";
import CardProject from "./Components/CardProject";

function Home() {
  return (
    <Layout>
      <div className="home">
        <div className="container">
          <div className=" section section-one">
            <CardProject
              imageUrl="img/queima.jpeg"
              date="2020"
              title="queima das fitas 2021"
              area="PROFESSIONAL"
              width="width/"
              team="Ana Catarina Ricardo Sacadura"
            />
          </div>
          <div className=" section section-two">
            <CardProject
              imageUrl="img/alta_baixa.jpg"
              date="2021"
              title="alta & baixa"
              area="ACADEMIC"
              width="width/"
              team="Alexandre Lucas Carlota Silva"
            />
          </div>
          <div className=" section section-three">
            <CardProject
              imageUrl="img/porto_bc.jpg"
              date="2020"
              title="porto.bc"
              area="PROFESSIONAL"
              width="width/"
              team="jeKnowledge"
            />
          </div>
          <div className=" section section-four">
            <CardProject
              imageUrl="img/skillX.jpg"
              date="2021"
              title="skillX"
              area="SUMMER INTERN"
              width=""
              team=""
            />
          </div>
          <div className=" section section-five">
            <CardProject
              imageUrl="img/culture.jpg"
              date="2021"
              title="cultureInn"
              area="ACADEMIC"
              width="width/"
              team="Carlota Silva Ricardo Sacadura"
            />
          </div>
          <div className=" section section-six">
            <CardProject
              imageUrl="img/mm.jpg"
              date="2021"
              title="volumetric world"
              area="ACADEMIC"
              width=""
              team=""
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
