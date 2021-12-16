import React from 'react';
import Layout from '../../components/Layout';
import { contentContainer } from './about.module.scss';

const About = () => {
  return (
    <Layout>
      <div className={contentContainer}>
        <h1>About.</h1>
      </div>
    </Layout>
  );
};

export default About;
