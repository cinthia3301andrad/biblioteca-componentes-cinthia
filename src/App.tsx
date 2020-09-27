import React from 'react'
import { Layout } from 'antd'
import Content from './components/Content'

import './App.less'


function App(): JSX.Element {
  return (
    <>
      <Layout style={{ height: "auto" }}>
     
        <Layout style={{ display: 'flex', flexDirection: 'row' }} >

          <Content />
        </Layout>
      </Layout>
    </>
  )
}

export default App