// import {useRoutes} from 'react-router-dom'
import {
  HomeOutlined,
  FileTextOutlined,
  CalendarOutlined,
  TagsOutlined,
  UserOutlined,
  SearchOutlined
} from '@ant-design/icons';
import Layout from '../view/Layout'
import Home from '../view/Home'
import Blog from '../view/Blog'
import Pigeonhole from '../view/Pigeonhole'
import Tag from '../view/Tag'
import About from '../view/About'
import Search from '../view/Search'
import Article from '../view/Article'

const routes = [
  {
    path: '/',
    name: '首页',
    icon: <HomeOutlined />,
    element: <Home />
  },
  {
    // path: '/',
    name: '首页',
    element: <Layout />,
    children: [
      {
        path: '/blog',
        name: '博客',
        icon: <FileTextOutlined />,
        element: <Blog />,
      },
      {
        path: '/pigeonhole',
        name: '归档',
        icon: <CalendarOutlined />,
        element: <Pigeonhole />,
      },
      {
        path: '/tag',
        name: '标签',
        icon: <TagsOutlined />,
        element: <Tag />,
      },
      {
        path: '/about',
        name: '关于',
        icon: <UserOutlined />,
        element: <About />,
      },
    ],
  },
  {
    // path: '/',
    element: <Layout />,
    children: [
      {
        path: '/search',
        name: '搜索',
        element: <Search />
      }
    ]
  },
  {
    // path: '/',
    element: <Layout />,
    children: [
      {
        path: '/article/:title',
        name: '文章',
        element: <Article />
      }
    ]
  },
]

export default routes