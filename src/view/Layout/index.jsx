import React from 'react'
import './index.css'
import CustomHeader from '../../components/CustomHeader'
import { Outlet } from 'react-router-dom';


export default function Blog() {
  
  return (
    <div className='layout'>
      <header className='header'>
        <CustomHeader />
      </header>
      <div className='content' id='content'>
        <Outlet />
      </div>
      <footer className='footer'>
        <div className='record'>皖ICP备2022010987号-1</div>
      </footer>
    </div>
  )
}
