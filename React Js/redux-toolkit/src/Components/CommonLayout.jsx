import React from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'
import { Outlet } from 'react-router'
import { Provider } from 'react-redux'
import { commonStore } from '../Redux Toolkit/ReduxStore'

export default function CommonLayout() {
    return (
        <>
            <Provider store={commonStore}>
                <Header />

                <Outlet />

                <Footer />
            </Provider>

        </>
    )
}
