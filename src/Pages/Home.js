import React from "react";
import Layout from "./Components/Layout";
import CardProject from "./Components/CardProject";

function Home() {
  return (
    <Layout>
      <div className="home">
        <CardProject
          date="2020"
          title="archive projects"
          area="ACADEMIC"
          team="Ana Catarina Ricardo Sacadura"
        />
      </div>
    </Layout>
  );
}

export default Home;
