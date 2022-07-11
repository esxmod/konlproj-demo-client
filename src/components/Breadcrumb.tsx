import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

export interface BreadcrumbProps {
  path: Array<string | JSX.Element>;
}

function Breadcrumb_({ path }: BreadcrumbProps) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <HomeOutlined />
      </Breadcrumb.Item>
      {path.map((v, i) => (
        <Breadcrumb.Item key={i}>{v}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}

export default React.memo(Breadcrumb_);
