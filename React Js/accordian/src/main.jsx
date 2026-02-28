import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'
import HomePage from './Components/HomePage.jsx'
import Courses from './Components/Courses.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HomePage /> */}
    <Courses/>
  </StrictMode>,
)
