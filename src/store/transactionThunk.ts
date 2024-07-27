import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiTransaction} from '../types';
import {RootState} from '../app/store';
import axiosApi from '../axiosApi';

export const createTransaction = createAsyncThunk<void, ApiTransaction, { state: RootState }>(
  'transactions/create',
  async (apiTransaction) => {
    await axiosApi.post('/transactions.json', apiTransaction);
  }
);

