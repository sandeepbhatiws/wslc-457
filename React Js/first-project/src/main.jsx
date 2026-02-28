import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './HomePage'
import AboutUs from './AboutUs'
import './assets/css/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* <HomePage/> */}
      <AboutUs/>
  </StrictMode>,
)
