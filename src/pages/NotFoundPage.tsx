import React from 'react';
import { Layout } from 'antd';
import { ErrorTemplate } from '../components';

export interface NotFoundPageProps {}

function NotFoundPage(props: NotFoundPageProps) {
  return (
    <Layout>
      <Layout.Content>
        <ErrorTemplate status={'404'} />
      </Layout.Content>
    </Layout>
  );
}

export default NotFoundPage;
