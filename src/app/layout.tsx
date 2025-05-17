// components/MainLayout.tsx
import React from 'react'
import { Layout } from 'antd'
import Header from './components/header'
import Footer from './components/footer'
import { ContactModalProvider } from './components/contact-modal'

const { Content } = Layout

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <ContactModalProvider>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Layout style={{ background: 'transparent', position: 'relative', zIndex: 1 }}>
          <Header />
          <Content
            style={{
              minHeight: 'calc(100vh - 279px)',
              backgroundColor: 'transparent',
            }}
          >
            {children}
          </Content>
          <Footer />
        </Layout>
      </div>
    </ContactModalProvider>
  )
}

export default MainLayout
