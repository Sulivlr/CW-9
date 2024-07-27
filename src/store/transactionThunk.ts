import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiTransaction, ApiTransactions, fetchResult, Transaction} from '../types';
import {RootState} from '../app/store';
import axiosApi from '../axiosApi';
import {fetchCategory} from './categoryThunk';

export const createTransaction = createAsyncThunk<void, ApiTransaction, { state: RootState }>(
  'transactions/create',
  async (apiTransaction) => {
    await axiosApi.post('/transactions.json', apiTransaction);
  }
);

export const fetchTransaction = createAsyncThunk<void, fetchResult[], { state: RootState }>(
  '/transactions/fetch',
  async () => {
    const {data: transactions} = await axiosApi.get<ApiTransactions | null>('/transactions.json');
    if (transactions === null) {
      return {
        transaction: [],
        total: 0
      };
    }
    return  Object.keys(transactions).map((id) => ({
      ...transactions[id],
      id,
    }));
  }
);
