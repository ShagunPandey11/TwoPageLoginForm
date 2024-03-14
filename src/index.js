import React from 'react';
import reactDom from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"

reactDom.render(
      <>
          <BrowserRouter>
              <App></App>
          </BrowserRouter>
      </>,document.getElementById("root")
  )
