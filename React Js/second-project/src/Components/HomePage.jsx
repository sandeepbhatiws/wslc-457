import React from 'react'
import Header from './Header'
import Footer from './Footer'
import webIcon from '../assets/images/learn-web-dev.svg'

export default function HomePage() {

    var title = 'Home Page';
    var status = 1;

  return (
    <>
        <Header></Header>
      <div className='home'>
        <h1>{ title }</h1>
        <img src={ webIcon }/>
        
        <p style={{ display : `${ status ? 'block' : 'none' }` }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad, sapiente molestias fugiat perferendis officia cum voluptates incidunt quas corporis, omnis placeat maiores harum atque. Magnam, et? Mollitia, dolorum cumque!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad, sapiente molestias fugiat perferendis officia cum voluptates incidunt quas corporis, omnis placeat maiores harum atque. Magnam, et? Mollitia, dolorum cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad, sapiente molestias fugiat perferendis officia cum voluptates incidunt quas corporis, omnis placeat maiores harum atque. Magnam, et? Mollitia, dolorum cumque!</p>

        {
            status
            ?
            <h2>True</h2>
            :
            <h2>False</h2>
        }

      </div>

      <Footer/>
    </>
  )
}
