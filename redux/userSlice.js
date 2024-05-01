import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
        userId:'',
        firstName:'',
        lastName:'',
        email:'',
        address:'',
        phone:''
    }
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
          },
        clearUser: (state) => initialState,
    }
})

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;