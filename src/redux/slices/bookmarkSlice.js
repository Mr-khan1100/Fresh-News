import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookmarked: [],
};

const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      const existing = state.bookmarked.find(item => item.id === action.payload.id);
      if (!existing) {
        state.bookmarked.push(action.payload);
      }
    },
    removeBookmark: (state, action) => {
      state.bookmarked = state.bookmarked.filter(item => item.id !== action.payload);
    },
    toggleBookmark: (state, action) => {
      const index = state.bookmarked.findIndex(item => item.id === action.payload.id);
      if (index === -1) {
        state.bookmarked.push(action.payload);
      } else {
        state.bookmarked.splice(index, 1);
      }
    },
  },
});

export const { addBookmark, removeBookmark, toggleBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
