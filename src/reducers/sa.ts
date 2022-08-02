import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { getPredictSA } from '../lib/api/predict';

export interface SAState {
  query: string;
  result: number[];
  status: 'idle' | 'loading' | 'failed' | 'done';
}

const initialState: SAState = {
  query: '',
  result: [],
  status: 'idle',
};

export const fetchPredictSA = createAsyncThunk(
  'sa/getPredictSA',
  async (query: string) => {
    const response = await getPredictSA(query);
    return response.data.result;
  },
);

export const saSlice = createSlice({
  name: 'sa',
  initialState,
  reducers: {
    resetRequest: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPredictSA.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPredictSA.fulfilled, (state, action) => {
        state.status = 'done';
        state.result = action.payload;
        state.query = action.meta.arg;
      })
      .addCase(fetchPredictSA.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { resetRequest } = saSlice.actions;

export const selectSA = (state: RootState) => state.sa;

export default saSlice.reducer;
