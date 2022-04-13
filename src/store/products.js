import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as productsService from "../services/productsService"

const productsInitialState = {
  loading: false,
  data: [],
  error: "",
  singleProduct: {},
  sales: [],
  pages: null,
  search: []
}

export const getProducts = createAsyncThunk(
  "GET_PRODUCTS",
  productsService.allProductsService
)

export const getSingleProduct = createAsyncThunk(
  "GET_SINGLE_PRODUCT",
  productsService.singleProductService
)

export const getCategoryProducts = createAsyncThunk(
  "GET_CATEGORY_PRODUCTS",
  productsService.categoriesProductService
)

export const postProduct = createAsyncThunk(
  "POST_PRODUCT",
  productsService.postProductService
)

export const searchProducts = createAsyncThunk(
  "SEARCH_PRODUCTS",
  productsService.searchProductsByTitle
)

export const editOneProduct = createAsyncThunk("EDIT_PRODUCT", productsService.editProductService)

export const deleteProduct = createAsyncThunk("DELETE_PRODUCT", 
productsService.deleteProductService)

export const getProductByTag = createAsyncThunk("GET_BY_TAG", 
productsService.getProductByTagSercive)

const productsSlice = createSlice({
  name: "products",
  initialState: productsInitialState,
  extraReducers: {
    [getProducts.pending]: state => {
      state.loading = true
    },
    [getProducts.fulfilled]: (state, action) => {
      state.data = action.payload.docs
      state.pages = action.payload.totalPages
      state.loading = false
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [getSingleProduct.pending]: state => {
      state.singleProduct = {}
      state.loading = true
    },
    [getSingleProduct.fulfilled]: (state, action) => {
      state.singleProduct = action.payload
      state.singleProduct.quantity = 1
      state.loading = false
    },
    [getSingleProduct.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [getCategoryProducts.pending]: state => {
      state.loading = true
    },
    [getCategoryProducts.fulfilled]: (state, action) => {
      state.data = action.payload.docs
      state.pages = action.payload.totalPages
      state.loading = false
    },
    [getCategoryProducts.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [postProduct.pending]: state => {
      state.loading = true
    },
    [postProduct.fulfilled]: (state, action) => {
      state.data = [...state.data, action.payload]
      state.loading = false
    },
    [postProduct.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [searchProducts.pending]: state => {
      state.loading = true
    },
    [searchProducts.fulfilled]: (state, action) => {
      state.search = action.payload
      state.loading = false
    },
    [searchProducts.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [deleteProduct.pending]: state => {
      state.loading = true
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.data = state.data.filter(product => product._id !== action.payload)
      state.loading = false
    },
    [deleteProduct.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [editOneProduct.pending]: state => {
      state.loading = true
    },
    [editOneProduct.fulfilled]: (state, action) => {
      state.data = [...state.data.filter(prod => prod._id !== action.payload._id), action.payload]
      state.singleProduct = {}
      state.loading = false
    },
    [editOneProduct.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [getProductByTag.pending]: state => {
      state.loading = true
    },
    [getProductByTag.fulfilled]: (state, action) => {
      state.sales = action.payload
      state.loading = false
    },
    [getProductByTag.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    }
  },
})

export default productsSlice.reducer
