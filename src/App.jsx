import React from 'react'
import { useRoutes } from 'react-router-dom';
import routes from './router';
import '@sven0706/css-reset'
import './app.css'
export default function App() {
  const element = useRoutes(routes)
  return (
    <>
      {
        element
      }
    </>
  )
}
