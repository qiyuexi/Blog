import React from 'react'
import { Layout } from 'antd';

import CustomHeader from '../../components/CustomHeader'
import CustomFooter from '../../components/CustomFooter'


export default function Layouts() {
  return (
    <Layout className="layout">
      <header className="header">
        <CustomHeader />
      </header>
    </Layout>
  )
}
