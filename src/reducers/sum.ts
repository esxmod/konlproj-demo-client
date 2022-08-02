import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { getPredictSum } from '../lib/api/predict';

export interface SumState {
  query: string;
  result: string[];
  status: 'idle' | 'loading' | 'failed' | 'done';
}

const initialState: SumState = {
  query: '',
  result: [],
  status: 'idle',
};

export const fetchPredictSum = createAsyncThunk(
  'sum/getPredictSum',
  async (query: string) => {
    const response = await getPredictSum(query);
    return response.data.result;
  },
);

export const sumSlice = createSlice({
  name: 'sum',
  initialState,
  reducers: {
    resetRequest: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPredictSum.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPredictSum.fulfilled, (state, action) => {
        state.status = 'done';
        state.result = action.payload;
        state.query = action.meta.arg;
      })
      .addCase(fetchPredictSum.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { resetRequest } = sumSlice.actions;

export const selectSum = (state: RootState) => state.sum;

export default sumSlice.reducer;
