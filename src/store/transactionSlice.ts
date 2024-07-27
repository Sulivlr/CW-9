import {Transaction} from '../types';
import {createSlice} from '@reduxjs/toolkit';

export interface transactionState {
  items: Transaction[],
  total: number,
  modalOpen: boolean,
}

export const initialState: transactionState = {
  items: [],
  total: 0,
  modalOpen: false,
};

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    openModal: (state) => {
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    }
  },
  selectors: {
    selectModalOpen: (state) => state.modalOpen,
  }
});

export const { openModal, closeModal } = transactionSlice.actions;
export const transactionReducer = transactionSlice.reducer
export const {selectModalOpen}
  = transactionSlice.selectors;