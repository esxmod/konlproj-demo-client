import React from 'react';
import { Layout } from 'antd';
import { Header, Footer, Breadcrumb } from '../components';
import { SAContainer } from '../containers';

export interface SAPageProps {}

function SAPage(props: SAPageProps) {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <Breadcrumb path={['Sentiment Analysis']} />
        <SAContainer />
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

export default SAPage;
