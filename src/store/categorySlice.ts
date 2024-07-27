import {createSlice} from '@reduxjs/toolkit';
import {Category} from '../types';

export interface CategoryState {
  item: Category[]
}

export const initialState: CategoryState = {
  item: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

  },
  selectors: {
    selectCategories: (state) => state.item,
  }
});

export const categoryReducer = categorySlice.reducer;
export const {selectCategories
} = categorySlice.selectors;