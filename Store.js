import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './redux/basketSlice'
import restaurantReducer from './redux/restaurantSlice'
import userSlice from './redux/userSlice'

const Store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
    user: userSlice
  },
})

export default Store