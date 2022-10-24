import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

export const useSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      console.log(state.loading)
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state = initialState;
    },
  },
});

export const { loginStart, loginFailure, loginSuccess, logout } =
  useSlice.actions;

export default useSlice.reducer;
