import React, { useState,useRef, useEffect, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { SearchOutlined, FileOutlined, LinkOutlined } from '@ant-design/icons';
import './inex.css'
export default function Search() {
  const navigate = useNavigate()
  const [userQuery, setUserQuery] = useState("");
  const articleList = [
    {
      title: '这是标题',
      text: '到的内容。。。到的内容。。。到的内容。。。到的内容。。。到的内容。。。到的内容。。。到的内容。。。1到的内容。。。到的内容。。。到的内容。。。到的内容。。。到的内容。。。到的内容。。。到的内容。。。1'
    },
    {
      title: '这是标题1221',
      text: '到的内容。。。到的内容。。。到的内容。。。到的内容。。。到的内容。。。到的内容。。。到的内容。。。1到的内容。。。到的内容。。。到的内容。。。到的内容。。。到的内容。。。到的内容。。。到的内容。。。1'
    },
  ]
  const sendQuery = (query) => {
    console.log('防抖---',query);
  };
  const delayedQuery = useDebounce(q => sendQuery(q), 500);
  const onChange = e => {
    let val = e.target.value
    setUserQuery(val)
    delayedQuery(val)
  };
  const onSearch = () => {
    console.log(userQuery, '----')
    sendQuery(userQuery)
  }
  return (
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
              <Link key={'key' + index} to={{ pathname: `/article/${item.title}` }}>
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
