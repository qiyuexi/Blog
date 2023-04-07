import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import routes from '../router';
import {
  SearchOutlined
} from '@ant-design/icons';


export default function CustomHeader() {
  const navigate = useNavigate()
  const navList = [routes[0], ...routes[1].children]
  return (
    <div className='header_cont'>
      <h1 className='header_title'>柒 Blog</h1>
      <div className='header_r'>
        <ul className='header_nav'>
          {
            navList.map(item => {
              return (
                <li key={item.name}>
                  <NavLink to={item.path} className={({isActive}) => {
                    return isActive ? 'isActive' : ''
                  }}>
                    <div>{item.icon}</div>
                    <div>{item.name}</div>
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
        <div className='header_search'>
          <Link to='/search'>
            <SearchOutlined />
          </Link>
        </div>
      </div>
    </div>
  )
}
