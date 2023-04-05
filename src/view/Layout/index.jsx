import React from 'react'
import { Layout } from 'antd';
import {
  ScheduleOutlined,
  TagsOutlined,
} from '@ant-design/icons';
import './index.css'
import CustomHeader from '../../components/CustomHeader'


export default function Layouts() {
  const inifNav = [
    { text: '文章', count: 24 },
    { text: '标签', count: 11 },
    { text: '分类', count: 15 },
  ]
  const blogList = [
    {
      id: 1,
      title: '博客标题',
      text: '博客内容。。。。。',
      date: '2023-02-03',
      img: 'https://img1.baidu.com/it/u=3007048469,3759326707&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
      tagList: [
        { tag: '前端' },
        { tag: 'vue' },
        { tag: 'react' },
      ]
    },
    {
      id: 2,
      title: '博客标题',
      text: '此次马克龙与冯德莱恩的访问，更有特殊之处。一位是欧洲大国元首，一位是欧盟主要机构的领导人，同时开启中国之行，在中欧关系交往史上打破了惯例。分析认为，这一方面凸显对中国的重视，另一方面则是希望体现欧盟外交的一致性，展示统一的欧盟形象和立场。那么对于此访有哪些值得关注的议题，本期《蓝厅观察》梳理了三大看点。',
      date: '2023-02-05',
      tagList: [
        { tag: '前端' },
        { tag: 'vue' },
        { tag: 'react' },
      ]
    },
  ]
  return (
    <Layout className='layout'>
      <header className='header'>
        <CustomHeader />
      </header>
      <div className='content'>
        <ul className="cont_l">
          {
            blogList.map(item => {
              return (
                <li className="cont_l_item" key={item.id}>
                  {
                    item.img ? (
                      <div className="cont_item_img">
                        <img src={item.img} alt="" />
                      </div>
                    ) : ''
                  }
                  <div className="cont_l_item_cont">
                    <div className="cont_l_item_title">
                      {item.title}
                    </div>
                    <div className="cont_l_item_text">
                      {item.text}
                    </div>
                    <div className="cont_l_item_tag">
                      <ScheduleOutlined />
                      <span className="cont_l_item_tag_span">
                        {item.date}
                      </span>
                    </div>
                    <ul className="cont_l_item_tag">
                      {
                        item.tagList.map((tagItem,key) => {
                          return (
                            <li key={'tag'+ key}>
                              <TagsOutlined />
                              <span className="cont_l_item_tag_span">{tagItem.tag}</span>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div className="cont_r">
          <div className="pres_inif">
            <div className="pres_inif_title">个人信息</div>
            <div className="pres_inif_img">
              <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202007%2F19%2F20200719233023_ruvtk.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683291760&t=70ba8112fb9afb746610c60c810b3bd1" alt="" />
            </div>
            <div className="pres_inif_name">
              柒
            </div>
            <ul className="pres_inif_nav">
              {
                inifNav.map( (item, index) => {
                  return (
                    <li key={'initNav' + index}>
                      <span>{item.text}</span>
                      <span>{item.count}</span>
                    </li>
                  )
                })
              }
            </ul>
            <div className="pres_inif_git">
              
            </div>
          </div>
          <div className="pres_inif">
            <div className="pres_inif_title">近期文章</div>
            <ul className="recent_art_cont">
              {
                [...Array(3)].map((item,index) => {
                  return (
                    <li key={'recentList' + index}>
                      <span>react 倒计时 {index}</span>
                      <span>2023-02-13</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <footer className='footer'>
        <div className='record'>皖ICP备2022010987号-1</div>
      </footer>
    </Layout>
  )
}
