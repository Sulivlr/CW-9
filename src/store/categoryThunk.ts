import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiCategory, ApiCategoryList, Category} from '../types';
import axiosApi from '../axiosApi';
import {RootState} from '../app/store';

export const createCategory = createAsyncThunk<void, ApiCategory, { state: RootState }>(
  'categories/create',
  async (apiCategory) => {
    await axiosApi.post('/categories.json', apiCategory);
  }
);

export const fetchCategory = createAsyncThunk<Category[], void, {state: RootState}>(
  'categories/fetch',
  async () => {
    const {data: categories} = await axiosApi.get<ApiCategoryList | null>('/categories.json');
    if (categories === null) {
      return [];
    }
    return Object.keys(categories).map((id) => ({
      ...categories[id],
      id,
    }));
  }
);

export const removeCategory = createAsyncThunk<void, string, { rejectValue: string }>(
  'categories/delete',
  async (categoryId,{rejectWithValue}) => {
    try {
    await axiosApi.delete(`/categories/${categoryId}.json`);
    } catch (error) {
      return rejectWithValue('cannot delete category');
    }
  },
);