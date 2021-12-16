import React from 'react';
import Layout from '../../components/Layout';
import Intro from '../../components/Intro';
import { contentContainer } from './landing.module.scss';

const Landing = () => {
  return (
    <Layout>
      <div className={contentContainer}>
        <Intro />
      </div>
    </Layout>
  );
};

export default Landing;
