import React from 'react';
import { Layout } from 'antd';
import { Header, Footer, Breadcrumb } from '../components';

export interface AboutPageProps {}

function AboutPage(props: AboutPageProps) {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <Breadcrumb path={['About']} />
        <div className='main-container'>{'AboutPage'}</div>
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

export default AboutPage;
