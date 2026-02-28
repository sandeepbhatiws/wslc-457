import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function ShowHide() {

    const [inputType, setInputType] = useState('password');

    const showPassword = () => {
        if(inputType == 'password'){
            setInputType('text');
        } else {
            setInputType('password');
        }
    }

  return (
    <>
      <Header/>

        <div className='show_hide'>
            <input type={inputType}/>
            <button onClick={ showPassword }>
                {
                    inputType == 'password'
                    ?
                    'Show Password'
                    :
                    'Hide Password'
                }
            </button>
        </div>

      <Footer/>
    </>
  )
}
