import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';

export interface HeaderProps {}

interface MenuOrderProps {
  [index: string]: string;
}

const orders: MenuOrderProps = {
  '/': '1',
  '/about': '2',
};

const items: MenuProps['items'] = [
  { key: '1', label: <Link to='/'>KoSA</Link> },
  { key: '2', label: <Link to='/about'>About</Link> },
];

function Header(props: HeaderProps) {
  const { pathname } = useLocation();

  return (
    <Layout.Header>
      <div className='logo' />
      <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={[orders[pathname]]}
        items={items}
      />
    </Layout.Header>
  );
}

export default React.memo(Header);
