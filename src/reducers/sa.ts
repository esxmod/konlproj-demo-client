import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { predictSA } from '../lib/api/predict';

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

export const fetchPredict = createAsyncThunk(
  'sa/predict',
  async (query: string) => {
    const response = await predictSA(query);
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

export const { resetRequest } = saSlice.actions;

export const selectState = (state: RootState) => state.sa;

export default saSlice.reducer;
