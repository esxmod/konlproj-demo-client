import React from 'react';
import { Layout } from 'antd';
import { Header, Footer, Breadcrumb } from '../components';

export interface AboutPageProps {}

function AboutPage(props: AboutPageProps) {
  console.debug('AboutPage')

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
