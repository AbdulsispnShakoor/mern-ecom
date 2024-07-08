import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[],

}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increment: (state) => {
     state.products.forEach(product => product.quantity++);
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { increment } = productSlice.actions

export default productSlice.reducer