import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Button } from 'antd';
import './index.css'
import Img from '../../../public/img/img_1.jpg'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className='home_style'>
      <div className='home_cont'>
        <div className='home_cont_img'>
          <img src={Img} alt="" />
        </div>
        <div className='home_cont_title'>柒</div>
        <div className='home_cont_text'>
          技术栈：HTML CSS JS React Axios AntDesign Node mysql
        </div>
        <div className="home_cont_to">
          <div>
            <Button block onClick={() => navigate('/blog')}>进入博客</Button>
          </div>
          <div>
            <Button type="primary" block href="https://github.com/qiyuexi">GitHub</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
