import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[],

}

export const CartSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increment: (state) => {
     state.products.forEach(product => product.quantity++);
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { increment } = CartSlice.actions

export default CartSlice.reducer