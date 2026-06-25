import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authModal: null,
  isCartOpen: false,
  isSearchOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openLogin: (state) => {
      state.authModal = "login";
    },
    openSignUp: (state) => {
      state.authModal = "signUp";
    },
    closeAuth: (state) => {
      state.authModal = null;
    },
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
    openSearch: (state) => {
      state.isSearchOpen = true;
    },
    closeSearch: (state) => {
      state.isSearchOpen = false;
    },
  },
});

export const {
  openLogin,
  openSignUp,
  closeAuth,
  openCart,
  closeCart,
  openSearch,
  closeSearch,
} = uiSlice.actions;

export default uiSlice.reducer;
