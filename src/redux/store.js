// import { devToolsEnhancer } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './filter/slice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});
