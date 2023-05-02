import { PropsWithChildren } from 'react';
import { Layout } from 'antd';
import { HeaderLayout } from './Header/Header';
import { SiderLayout } from './Sider/Sider';
import { FooterLayout } from './Footer/Footer';

export function MainLayout({children}: PropsWithChildren){
  const {Footer, Content } = Layout;
  return (
    <Layout>
      <HeaderLayout />
      <Layout>
        <SiderLayout />
        <Content>{children}</Content>
      </Layout>
      <Footer>
        <FooterLayout />
      </Footer>
    </Layout>
  )
}