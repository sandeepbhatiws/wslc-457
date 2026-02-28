import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 isLogin: 0,
}

export const loginSlice = createSlice({
  name: 'user_login',
  initialState,
  reducers: {
    login : ((data) => {
      data.isLogin = 1;
    })
  },
})

// Action creators are generated for each case reducer function
export const { login } = loginSlice.actions

export default loginSlice.reducer