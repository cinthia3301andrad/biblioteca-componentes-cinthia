import React from 'react'
import { Layout } from 'antd'
import Content from './components/Content'
import Header from './components/Header/'
import './App.less'


function App(): JSX.Element {
  return (
    <>
      <Layout style={{ height: "auto" }}>
        <Header />
        <Layout style={{ display: 'flex', flexDirection: 'row' }} >

          <Content />
        </Layout>
      </Layout>
    </>
  )
}

export default App