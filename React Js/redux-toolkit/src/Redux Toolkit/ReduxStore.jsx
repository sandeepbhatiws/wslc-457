import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './CartSlice'
import loginSlice from './LoginSlice'

export const commonStore = configureStore({
  reducer: {
    cart : cartSlice,
    user_login : loginSlice
  },
})