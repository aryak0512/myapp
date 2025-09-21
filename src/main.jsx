import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {MyComp} from "./MyComp.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyComp />
  </StrictMode>,
)
