import {
    getCookie,
    getLocalStorage,
    getSessionStorage,
    removeCookie,
    removeLocalStorage,
    removeSessionStorage,
    setCookie,
    setSessionStorage,
  } from "../others/lib/utils";
  import { createSlice } from "@reduxjs/toolkit";
  import { IAuth } from "../others/interfaces";
  
  interface AuthState {
    isAuthenticated: boolean;
    user: IAuth | null;
  }
  
  const initialState: AuthState = {
    isAuthenticated:
      (getLocalStorage("isAuthenticated") || getSessionStorage("isAuthenticated")) === "true" && getCookie("access_token")
        ? false
        : true,
    user: JSON.parse(getLocalStorage("user") as string) || JSON.parse(getSessionStorage("user") as string) || null,
  };
  
  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      login: (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user_data;
        setSessionStorage("isAuthenticated", "true");
        setSessionStorage("user", JSON.stringify(action.payload.user_data));
        setCookie("isAuthenticated", "true",1);
        setCookie("accessToken", action.payload.access_token, 1);
      },
      logout: (state) => {
        state.isAuthenticated = false;
        state.user = null;
        removeLocalStorage("isAuthenticated");
        removeLocalStorage("user");
        removeSessionStorage("isAuthenticated");
        removeSessionStorage("user");
        removeCookie("accessToken");
      },
    },
  });
  
  export const { login, logout } = authSlice.actions;
  
  export default authSlice.reducer;