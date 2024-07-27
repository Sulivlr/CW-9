import {createSlice} from '@reduxjs/toolkit';
import {Category} from '../types';
import {createCategory, fetchCategory} from './categoryThunk';

export interface CategoryState {
  item: Category[]
  isCreating: boolean;
  isFetching: boolean;
}

export const initialState: CategoryState = {
  item: [],
  isCreating: false,
  isFetching: false,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createCategory.pending, (state) => {
      state.isCreating = true;
    }).addCase(createCategory.fulfilled, (state) => {
      state.isCreating = false;
    }).addCase(createCategory.rejected, (state) => {
      state.isCreating = false;
    });

    builder.addCase(fetchCategory.pending, (state) => {
      state.isFetching = true;
    }).addCase(fetchCategory.fulfilled, (state, {payload: items}) => {
      state.isFetching = false;
      state.item = items;
    }).addCase(fetchCategory.rejected, (state) => {
      state.isFetching = false;
    });

  },
  selectors: {
    selectCategoryIsFetching: (state) => state.isFetching,
    selectCategoryIsCreating: (state) => state.isCreating,
    selectCategory: (state) => state.item,
  }
});

export const categoryReducer = categorySlice.reducer;
export const {
  selectCategory,
  selectCategoryIsCreating,
  selectCategoryIsFetching
} = categorySlice.selectors;