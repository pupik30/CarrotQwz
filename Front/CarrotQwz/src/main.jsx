import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Mainpage from '../src/MainPage.jsx'
import Header from "../src/Common/Header.jsx"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App/>
)
