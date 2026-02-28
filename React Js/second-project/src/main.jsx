import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'
import HomePage from './Components/HomePage'
import AboutUs from './Components/AboutUs'
import Counter from './Components/Counter'
import ShowHide from './Components/ShowHide'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HomePage/> */}
    {/* <AboutUs/> */}

    {/* <Counter/> */}


    <ShowHide/>
  </StrictMode>,
)
