import React from 'react';
import { Layout } from 'antd';
import { Header, Footer, Breadcrumb } from '../components';
import { HomeContainer } from '../containers';

export interface HomePageProps {}

function HomePage(props: HomePageProps) {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <Breadcrumb path={['KoSA']} />
        <HomeContainer />
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

export default HomePage;
