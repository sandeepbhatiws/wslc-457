import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './LoginSlice'

export const reduxStore = configureStore({
  reducer: {
    login : loginSlice
  },
})