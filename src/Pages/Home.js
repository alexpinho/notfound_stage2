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
              imageUrl="img/50.jpg"
              date="2020"
              title="queima das fitas 2021"
              area="PROFESSIONAL"
              team="Ana Catarina Ricardo Sacadura"
            />
          </div>
          <div className=" section section-two">
            <CardProject
              imageUrl="img/alta_baixa.jpg"
              date="2021"
              title="alta & baixa"
              area="ACADEMIC"
              team="Alexandre Lucas Carlota Silva"
            />
          </div>
          <div className=" section section-three">
            <CardProject
              date="2020"
              title="alta e baixa"
              area="ACADEMIC"
              team="Ana Catarina Ricardo Sacadura"
            />
          </div>
          <div className=" section section-four">
            <CardProject
              date="2020"
              title="skillX"
              area="ACADEMIC"
              team="Ana Catarina Ricardo Sacadura"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
