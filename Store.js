import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './redux/basketSlice'
import restaurantReducer from './redux/restaurantSlice'
const Store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer
  },
})

export default Store