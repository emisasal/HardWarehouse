import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"

import userSlice from "./user"
import productsSlice from "./products"

const store = configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
    reducer: {
      user: userSlice,
      products: productsSlice,
    },
  })
  
  export default store