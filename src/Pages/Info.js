import React from "react";
import Layout from "./Components/Layout";

const Info = () => {
  return (
    <Layout>
      <div className="info">
        <div className="info-text text-big">
          Hi, I'm Alexandre! I appreciate that you want to know a little more
          about my work.
          <br />
          The portfolio presents my 4 best projects and also experiences, which
          reflect my skills and make you get to know me a little better.
          <br />I hope you like it, <span className="blink_me">l</span>
        </div>
      </div>
    </Layout>
  );
};

export default Info;
