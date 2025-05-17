import React from 'react'
import { ConfigProvider } from 'antd'
import MainLayout from './app/layout'
import './assets/styles/main.scss'
import './assets/fontawesome/css/all.css'
import keycloak from './util/keycloak'
import { ContactModalProvider } from './app/components/contact-modal'
// import ParticleBackground from './components/particle/particle'

function App () {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#19A05D',
          borderRadius: 2,

          // Alias Token
          // colorBgContainer: '#f6ffed',
        },
      }}
    >
                <ContactModalProvider>
                  <MainLayout/>
                </ContactModalProvider>
    </ConfigProvider>
  )
}

export default App
