import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

var cartItems = localStorage.getItem('cart_items')
var cartItems = JSON.parse(cartItems);

const initialState = {
  cartData : cartItems ?? [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(state.cartData)
      console.log(action.payload)

      const cartValues = {
        id : action.payload.id,
        name : action.payload.name,
        image : action.payload.image,
        price : action.payload.price,
        quantity : 1,
        description : action.payload.description,
      } 

      var finalData = [cartValues, ...state.cartData];
      state.cartData = finalData;


      localStorage.setItem('cart_items', JSON.stringify(finalData))
      toast.success('Add to Cart succussfully.')

      console.log(cartValues);
    },
    deleteCart: (state, action) => {
    
      var filterData = state.cartData.filter((v) => {
        if(v.id != action.payload){
          return v
        }
      })

      state.cartData = [...filterData];
      localStorage.setItem('cart_items', JSON.stringify(filterData))
      toast.success('Delete Cart succussfully.')

    },
    updateCart: (state, action) => {
      console.log(action)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, deleteCart, updateCart } = cartSlice.actions

export default cartSlice.reducer