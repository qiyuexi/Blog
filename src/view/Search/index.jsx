import React, { useState,useRef, useEffect, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { SearchOutlined, FileOutlined, LinkOutlined } from '@ant-design/icons';
import req from '../../http/http'
import './inex.css'
export default function Search() {
  const navigate = useNavigate()
  const [userQuery, setUserQuery] = useState("");
  const [articleList, useArticleList] = useState([])

  const sendQuery = (query) => {
    if (userQuery !== '') {
      req({
        url: '/search',
        method: 'post',
        params: {
          title: query
        }
      }).then(res => {
        // console.log(res,' ---axios');
        useArticleList([...res.data])
      })
    } else {
      useArticleList([])
    }
  };
  const delayedQuery = useDebounce(q => sendQuery(q), 500);
  const onChange = e => {
    let val = e.target.value
    setUserQuery(val)
    delayedQuery(val)
  };
  const onSearch = () => {
    sendQuery(userQuery)
  }
  return (
    <div style={{width: '100%'}}>
      <div className="search_style">
        <h1>站内搜索</h1>
        <div className="search_inpit">
          <input type="text" placeholder="文章关键字搜索..." onChange={onChange} value={userQuery} />
          <div className="search_btn" onClick={onSearch} >
            <SearchOutlined />
          </div>
        </div>
        <ul className="search_cont">
          {
            articleList.map((item, index) => {
              return (
                <Link key={'key' + index} to={{ pathname: `/article/${item.id}` }}>
                  <li className="search_cont_item">
                    <div className="search_cont_icon">
                      <FileOutlined />
                    </div>
                    <div className="search_item_cont">
                      <div className="cont_item_title">
                        <h1>{item.title}</h1>
                        <div>
                          <span className="search_action"></span>
                          {item.text}
                          </div>
                      </div>
                    </div>
                    <div className="search_cont_icon">
                      <LinkOutlined />
                    </div>
                  </li>
                </Link>
              )
            })
          }
        </ul>
        <div>
          {
            articleList.length<=0 ? 
              <p style={{ marginBottom: '20px', fontSize: '22px', textAlign: 'center' }}>: )</p>
              : ''
          }
          <p style={{ fontSize: '18px' }}>
            {
              articleList.length<=0 ? '这里什么都么有，要不搜索看看' : '到底了'
            }
          </p>
        </div>
      </div>
    </div>
  )
}

function useDebounce (fn, delay, dep = []) {
  const { current } = useRef({ fn, timer: null });
    useEffect(function () {
        current.fn = fn;
    }, [fn]);

    return useCallback(function f(...args) {
        if (current.timer) {
            clearTimeout(current.timer);
        }
        current.timer = setTimeout(() => {
            current.fn.call(this, ...args);
        }, delay);
    }, dep) 
}
