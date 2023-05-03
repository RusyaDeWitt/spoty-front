import { PropsWithChildren } from 'react';
import { Layout } from 'antd';

import { SiderLayout } from './Sider/Sider';
import { FooterLayout } from './Footer/Footer';
import './styles.css'

export function MainLayout({children}: PropsWithChildren){
  const { Footer, Content, Sider} = Layout;
  return (
    <Layout style={{height: '100% !important'}} hasSider>
      <Sider
        style={{
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor: 'black',
        }}
      >
        <SiderLayout />
      </Sider>
      <Layout>
        <Content style={{backgroundColor: 'black', marginLeft: '200px', height: '100vh'}}>{children}</Content>
        <Footer style={{backgroundColor: 'black'}}>
          <FooterLayout />
        </Footer>
      </Layout>
    </Layout>
  )
}