import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { predictSum } from '../lib/api/predict';

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

export const fetchPredict = createAsyncThunk(
  'sum/predict',
  async (query: string) => {
    const response = await predictSum(query);
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
      .addCase(fetchPredict.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPredict.fulfilled, (state, action) => {
        state.status = 'done';
        state.result = action.payload;
        state.query = action.meta.arg;
      })
      .addCase(fetchPredict.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { resetRequest } = sumSlice.actions;

export const selectState = (state: RootState) => state.sum;

export default sumSlice.reducer;
