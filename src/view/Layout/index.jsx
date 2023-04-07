import React from 'react'
import { Layout } from 'antd';
import './index.css'
import CustomHeader from '../../components/CustomHeader'
import { Outlet } from 'react-router-dom';


export default function Blog() {
  
  return (
    <Layout className='layout'>
      <header className='header'>
        <CustomHeader />
      </header>
      <div className='content' >
        <Outlet />
      </div>
      <footer className='footer'>
        <div className='record'>皖ICP备2022010987号-1</div>
      </footer>
    </Layout>
  )
}
