import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './opertation';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const initialState = {
  user: {
    login: '',
    email: '',
  },
  token: '',
  isLogin: false,
  isRefresh: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        return (state = initialState);
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.isRefresh = false;
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLogin = true;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefresh = true;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefresh = false;
      })
      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        (state, { payload }) => {
          console.log(payload);
          state.token = payload.token;
          state.user.name = payload.user.name;
          state.user.email = payload.user.email;
          state.isLogin = true;
          console.log(state.user.name);
        }
      );
  },
});

export const authReducer = slice.reducer;
