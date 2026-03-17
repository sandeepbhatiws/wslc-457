'use client'
import React from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'
import '../css/style.css'
import { Provider } from 'react-redux'
import { reduxStore } from '../(website)/Redux Toolkit/ReduxStore'

export default function CommonLayout({ children }) {
  return (
    <>
      <Provider store={ reduxStore }>
        <Header />

        {children}

        <Footer />
      </Provider>
    </>
  )
}
