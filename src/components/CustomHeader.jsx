import React from 'react'

export default function CustomHeader() {
  const navList = [
    { title: '首页', icon: '' },
    { title: '博客', icon: '' },
    { title: '归档', icon: '' },
    { title: '标签', icon: '' },
    { title: '关于', icon: '' },
  ]
  return (
    <div className='header_cont'>
      <h1 className='header_title'>柒 Blog</h1>
      <ul className='header_nav'>
        {
          navList.map(item => {
            return <li key={item.title}> {item.title} </li>
          })
        }
      </ul>
    </div>
  )
}
