import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    selectedCategoryList: [],
    detailNews:null,
    selectedCountry:{ name: 'United States', code: 'us', flag: '🇺🇸' },
    searchResult:[],
    date: null,
};

const userSlice  = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setSelectedCategoryList: (state, action) => {
        state.selectedCategoryList = action.payload;
    },
    setDetailNews: (state, action) => {
        state.detailNews = action.payload;
    },
    setSelectedCountry : (state,action) => {
        state.selectedCountry = action.payload;
    },
    setSearchResult: (state, action) => {
        state.searchResult = action.payload;
    },
    setDate: (state,action) => {
        state.date = action.payload;
    },
  },
});

export const {
    setSelectedCategoryList,
    setDetailNews,
    setSelectedCountry,
    setSearchResult,
    setDate,
} = userSlice .actions;
export default userSlice .reducer;

