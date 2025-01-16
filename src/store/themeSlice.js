import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: JSON.parse(localStorage.getItem('darkMode')) || false,
};

const themeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = !state.mode;
      localStorage.setItem('darkMode', JSON.stringify(state.mode));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
