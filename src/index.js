import React from 'react';
import {createRoot} from 'react-dom/client';
import { HashRouter as Router} from 'react-router-dom';
// import { BrowserRouter as Router} from 'react-router-dom';

import 'antd/dist/reset.css';
import App from './App'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <Router >
    <App/>
  </Router>
)


 