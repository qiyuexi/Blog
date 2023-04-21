import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import request from '../../http/http'
import {
  TagsOutlined,
} from '@ant-design/icons';

export default function article() {
  const {id} = useParams()
  const tagsRef = useRef()
  const [article, setArticle] = useState([])
  useEffect(() => {
    request({
      url: '/article',
      method: 'post',
      data: {
        id
      }
    }).then(res => {
      console.log('res---', res);
      setArticle([...res.data])
    })
  },[])
  return (
    <div>
      {
        article.length > 0 ? (
          <>
            <h1>{article[0].title}</h1>
            <ul className="cont_l_item_tag">
              {
                article[0].tag.map((tagItem,key) => {
                  return (
                    <li key={'tag'+ key}>
                      <TagsOutlined />
                      <span className="cont_l_item_tag_span">{tagItem.tag}</span>
                    </li>
                  )
                })
              }
            </ul>
            <div>
              <img src={article[0].img|| ''} alt="" />
            </div>
            <div>
              {article[0].text}
            </div>
          </>
        ) : ''
      }
    </div>
  )
}
