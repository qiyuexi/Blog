import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import request from '../../http/http'
import useImg from '../../../public/img/img_1.jpg'
import { dateinit } from '../../http/hook'
import {
  ScheduleOutlined,
  TagsOutlined,
} from '@ant-design/icons';
export default function Blog() {
  const [latestArticle, setLatestArticle] = useState([])
  const listHeight = useRef()
  const [blogList, setBlogList] = useState([])
  const inifNav = [
    { text: '文章', count: blogList.length },
    { text: '标签', count: 11 },
    { text: '分类', count: 15 },
  ]
  const [page, setPage] = useState(1)
  useEffect(() => {
    request({
      url: '/latestArticle',
      method: 'get',
      params: {
        // title: query
      }
    }).then(res => {
      setLatestArticle([...res.data])
    })
    req()
  },[page])
  const onScrol = () => {
    window.addEventListener('scroll', scorl)
  }
  const req = () => {
    request({
      url: '/blog',
      method: 'post',
      data: {
        page,
        pageSize: 10
      }
    }).then(res => {
      const list = [...blogList, ...res.data.list]
      setBlogList(list)
    })
  }
  const scorl = () => {
    const winH = window.innerHeight;
    const top = document.documentElement.scrollTop
    const h = listHeight.current.clientHeight + 40
    const s = h - winH + 21
    console.log(s -top , '22--', top);
    if (s - top  < 50) {
      console.log('即将触底---');
      setPage(page+1)
      console.log(page, 'page---');
    }
  }
  return (
    <>
      <ul className="cont_l" ref={listHeight} onScroll={onScrol()}>
        {
          blogList.length? blogList.map(item => {
              return (
                <Link key={item.id} to={{ pathname: `/article/${item.id}` }}>
                  <li className="cont_l_item">
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
                          {dateinit(item.time)}
                        </span>
                      </div>
                      <ul className="cont_l_item_tag">
                        {
                          item.tag.map((tagItem,key) => {
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
                </Link>
              )
            })
            : 
            <li>暂无文章。。。</li>
        }
      </ul>
      <div className="cont_r">
        <div className="pres_inif">
          <div className="pres_inif_title">个人信息</div>
          <div className="pres_inif_img">
            <img src={useImg} alt="" />
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
              latestArticle.map((item,index) => {
                return (
                  <li key={item.id}>
                    <span>{item.title}</span>
                    <span>{dateinit(item.time)}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}
