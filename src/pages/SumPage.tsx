import React from 'react';
import { Layout } from 'antd';
import { Header, Footer, Breadcrumb } from '../components';
import { SumContainer } from '../containers';

export interface SumPageProps {}

function SumPage(props: SumPageProps) {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <Breadcrumb path={['Summarization']} />
        <SumContainer />
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

export default SumPage;
