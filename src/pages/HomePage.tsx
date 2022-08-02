import React from 'react';
import { Layout } from 'antd';
import { Header, Footer, Breadcrumb } from '../components';

export interface HomePageProps {}

function HomePage(props: HomePageProps) {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <Breadcrumb path={['Home']} />
        <div className='main-container'>{'Welcome to KoNLProj demo page'}</div>
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

export default HomePage;
