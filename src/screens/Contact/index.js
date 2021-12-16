import React from 'react';
import Layout from '../../components/Layout';
import { contentContainer } from './contact.module.scss';

const Contact = () => {
  return (
    <Layout>
      <div className={contentContainer}>
        <h1>Contact.</h1>
      </div>
    </Layout>
  );
};

export default Contact;
