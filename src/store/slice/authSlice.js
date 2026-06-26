import { createSlice } from "@reduxjs/toolkit";

// Hardcoded admin credentials — swap for real backend auth later
const ADMIN_EMAIL = "sindhu@gmail.com";
const ADMIN_PASSWORD = "Admin.!@#";

const initialState = {
  user: null,
  role: null, // "admin" | "customer"
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password, name } = action.payload;
      const isAdmin =
        email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
      state.user = { name: name || email.split("@")[0], email };
      state.role = isAdmin ? "admin" : "customer";
      state.isAuthenticated = true;
    },
    signup: (state, action) => {
      const { name, email } = action.payload;
      state.user = { name, email };
      state.role = "customer"; // signup always = customer
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.role = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, signup, logout } = authSlice.actions;
export default authSlice.reducer;