import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

var userLogin = Cookies.get('userLogin');

const initialState = {
  isLogin: userLogin ?? '',
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state) => {
        state.isLogin = 1;
        Cookies.set('userLogin', 1)
    },
    register: (state) => {
    },
    logout: (state, action) => {
        state.isLogin = '';
        // Cookies.set('userLogin', '')
        Cookies.remove('userLogin')
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, register, logout } = loginSlice.actions

export default loginSlice.reducer